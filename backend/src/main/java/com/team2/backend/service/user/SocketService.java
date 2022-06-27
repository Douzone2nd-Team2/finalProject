package com.team2.backend.service.user;

import com.team2.backend.domain.reservation.*;
import com.team2.backend.web.dto.SocketMessage;
import lombok.RequiredArgsConstructor;
import org.apache.http.client.utils.DateUtils;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@RequiredArgsConstructor
@Service
public class SocketService {
    private static final SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
    private final SimpMessagingTemplate simpMessagingTemplate;
    private final ReservationRepository reservationRepository;
    private final ReservationCheckRepository reservationCheckRepository;
    private final TimelistRepository timelistRepository;

    @Transactional
    public SocketMessage getTimelist(SocketMessage message) throws ParseException {
        HashMap<String, String> data = (HashMap<String, String>) message.getData();
        Long resourceNo = Long.parseLong(data.get("resourceNo"));
        Date startDate = formatter.parse(data.get("startTime"));
        Date endDate = formatter.parse(data.get("endTime"));

        List<Date> dateList = new ArrayList<>();
        for (Date i = startDate; i.before(endDate) || i.equals(endDate); i = new Date(i.getTime() + (1000 * 60 * 60 * 24))) {
            dateList.add(i);
        }

        HashMap<String, Integer[]> timelists = new HashMap<>();

        for (int i = 0; i < dateList.size(); i++) {
            ReservationCheck check = reservationCheckRepository.findByResourceNoAndCheckDate(resourceNo, dateList.get(i));
            if (check == null) {
                continue;
            }
            else {
                Integer[] timelist =  timelistRepository.findAllByCheckNo(check.getCheckNo());
                timelists.put(formatter.format(dateList.get(i)), timelist);
            }
        }

        if (timelists.isEmpty()) {
            message.setResCode(4000);
            message.setMessage("[SUCCESS] 빈 예약 리스트");
        }
        else {
            message.setData(timelists); // 예약된 시간 리스트 보냄 - 여기 있는 시간들만 disable 시키면 됨
            message.setResCode(4000);
            message.setMessage("[SUCCESS] 예약 리스트 전송");
        }

        simpMessagingTemplate.convertAndSendToUser(message.getSenderName(),"/do", message);

        return message;
    }

    @Transactional(rollbackFor = {RuntimeException.class, Exception.class})
    public SocketMessage checkReservation(SocketMessage message) throws ParseException {
        HashMap<String, String> data = (HashMap<String, String>) message.getData();
        Long resourceNo = Long.parseLong(data.get("resourceNo"));
        String from = data.get("startTime");
        String to = data.get("endTime");
        Date startDate = formatter.parse(from);
        Date endDate = formatter.parse(to);
        Integer startTime = timeParser(from.split(" ")[1]);
        Integer endTime = timeParser(to.split(" ")[1]);

        List<Date> dateList = new ArrayList<>();
        for (Date i = startDate; i.before(endDate) || i.equals(endDate); i = new Date(i.getTime() + (1000 * 60 * 60 * 24))) {
            dateList.add(i);
        }

        switch (isAvailable(resourceNo, startDate, startTime, endDate, endTime)) {
            case "NEW":
                for (int i = 0; i < dateList.size(); i++) {
                    ReservationCheck newCheck = reservationCheckRepository.save(
                            ReservationCheck.builder()
                                    .resourceNo(resourceNo)
                                    .checkDate(dateList.get(i))
                                    .build()
                    );
                    if (dateList.size() > 1) {
                        if (i == 0) {
                            saveTimelist(newCheck.getCheckNo(), startTime, 48);
                        }
                        else if (i == dateList.size() - 1) {
                            saveTimelist(newCheck.getCheckNo(), 0, endTime);
                        }
                        else {
                            saveTimelist(newCheck.getCheckNo(), 0, 48);
                        }
                    }
                    else  {
                        saveTimelist(newCheck.getCheckNo(), startTime, endTime);
                    }
                }
                System.out.println("NEW");
                message.setResCode(4000);
                message.setMessage("[SUCCESS] 시간 저장 완료");
                break;
            case "OK":
                for (int i = 0; i < dateList.size(); i++) {
                    ReservationCheck findCheck = reservationCheckRepository.findByResourceNoAndCheckDate(resourceNo, dateList.get(i));
                    if (dateList.size() > 1) {
                        if (i == 0) {
                            saveTimelist(findCheck.getCheckNo(), startTime, 48);
                        }
                        else if (i == dateList.size() - 1) {
                            saveTimelist(findCheck.getCheckNo(), 0, endTime);
                        }
                        else {
                            saveTimelist(findCheck.getCheckNo(), 0, 48);
                        }
                    }
                    else  {
                        saveTimelist(findCheck.getCheckNo(), startTime, endTime);
                    }
                }
                System.out.println("OK");
                message.setResCode(4000);
                message.setMessage("[SUCCESS] 시간 저장 완료");
                break;
            case "FAIL":
                // 시간 리스트 다시 보내줄까?
                System.out.println("FAIL");
                message.setResCode(4001);
                message.setMessage("[FAIL] 시간 중복");
                break;
            default:
                System.out.println("ERROR");
                message.setResCode(4004);
                message.setMessage("[ERROR] 알 수 없는 오류");
                throw new RuntimeException();
        }
        simpMessagingTemplate.convertAndSendToUser(message.getSenderName(),"/do", message);
        return message;
    }

    @Transactional(rollbackFor = {RuntimeException.class, Exception.class})
    public String isAvailable(Long resourceNo, Date startDate , Integer startTime, Date endDate, Integer endTime) throws ParseException {
        
        // 당일 예약이라면
        if (startDate.equals(endDate)) {
            ReservationCheck check = reservationCheckRepository.findByResourceNoAndCheckDate(resourceNo, startDate);
            if (check == null) {
                return "NEW";
            }
            List<Timelist> timelist = check.getTimelist();
            for (int i = 0; i < timelist.size(); i++) {
                Integer timeNo = timelist.get(i).getTimeNo();
                if (timeNo >= startTime && timeNo < endTime) {
                    return "FAIL";
                }
            }
            return "OK";
        }
        else { // 여러 날짜 예약이라면
            List<ReservationCheck> checklist = reservationCheckRepository.findAllByResourceNoAndCheckDateBetween(resourceNo, startDate, endDate);
            if (checklist.isEmpty()) {
                return "NEW";
            }

            for (int i = 0; i < checklist.size(); i++) {
                ReservationCheck check = checklist.get(i);
                List<Timelist> timelist = check.getTimelist();
                for (int j = 0; j < timelist.size(); j++) {
                    Integer timeNo = timelist.get(j).getTimeNo();
                    if (timeNo >= startTime && timeNo < endTime) {
                        return "FAIL";
                    }
                }
            }
            return "OK";
        }

    }


    //        3. 예약 완료 -> 예약 완료 테이블에 넣고 현재 예약중에서 state 예약 완료로 변경
//        4. 소켓 끊음
    @Transactional
    public SocketMessage makeReservation(SocketMessage message) {
        // 현재 예약중 테이블 state 예약 완료로 변경
        // 예약 테이블에 save
        // 예약 성공 메세지 전송 - 클라이언트는 예약 완료 페이지로 이동
        // 예약 실패 메세지 전송(db에러?) - 클라이언트는 알수없는 오류 모달? - 초기화면으로 이동
        return null;
    }

    public Integer timeParser(String time) {
        Integer hours = Integer.parseInt(time.split(":")[0]) * 2;
        Integer minutes = Integer.parseInt(time.split(":")[1]) == 0 ? 0 : 1;
        return hours + minutes;
    }

    @Transactional
    public void saveTimelist(Long checkNo, Integer startTime, Integer endTime) {
        for (int j = startTime; j < endTime; j++) {
            timelistRepository.save(
                    Timelist.builder()
                            .checkNo(checkNo)
                            .timeNo(j)
                            .build()
            );
        }
    }
}
