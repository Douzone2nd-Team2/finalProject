package com.team2.backend.service.admin;

import com.team2.backend.domain.reservation.*;
import com.team2.backend.domain.resource.PeopleCnt;
import com.team2.backend.domain.resource.PeopleCntRepository;
import com.team2.backend.domain.resource.ResourceRepository;
import com.team2.backend.web.dto.JsonResponse;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.admin.ReservationManagementDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ReservationService {

    private final ReservationRepository reservationRepository;
    private final PeopleCntRepository peopleCntRepository;
    private final ReservationQuerydslRepository reservationQuerydslRepository;
    private final ReservationCheckRepository reservationCheckRepository;
    private final TimelistRepository timelistRepository;
    private final ResourceRepository resourceRepository;

    @Transactional
    public ResponseEntity<Message> saveReservation(HttpServletRequest req, ReservationManagementDto body) throws ParseException {

        Message message;

        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        SimpleDateFormat formatter2 = new SimpleDateFormat("yyyy-MM-dd");

        Reservation reservation = body.toEntity();

        String[] start = formatter.format(body.getStartTime()).split(" ");
        String[] end = formatter.format(body.getEndTime()).split(" ");

        String startDate = start[0];
        String[] startTime = start[1].split(":");
        int startHour = Integer.parseInt(startTime[0]);
        int startMinute = Integer.parseInt(startTime[1]);

        String endDate = end[0];
        String[] endTime = end[1].split(":");
        int endHour = Integer.parseInt(endTime[0]);
        int endMinute = Integer.parseInt(endTime[1]);

        int[] timeList = new int[2];
        timeList[0] = startHour * 2 + (startMinute == 30 ? 1 : 0);
        timeList[1] = endHour * 2 + (endMinute == 30 ? 1 : 0) - 1;


        int rowcnt = (int) ((formatter2.parse(end[0]).getTime() - formatter2.parse(start[0]).getTime()) / 3600000 / 24) + 1;

        List<String> dateList = duringDate(formatter2.parse(start[0]), formatter2.parse(end[0]));

        if (reservationCheck(reservation, dateList, timeList[0], timeList[1], "insert" , Long.parseLong("0"))) {  // 중복예약 내역이 없을 때

            Long reservNo = reservationRepository.save(reservation).getReservNo();

            Long cateNo = resourceRepository.findByCategory(body.getResourceNo());

            for (int i = 0; i < dateList.size(); i++) {  //날짜마다 insert
                ReservationCheck reservationCheck = ReservationCheck.builder()
                        .resourceNo(body.getResourceNo())
                        .checkDate(dateList.get(i))
                        .cateNo(cateNo)
                        .reservNo(reservNo)
                        .build();
                Long checkNo = reservationCheckRepository.save(reservationCheck).getCheckNo();

                //[timelist - insert]    - 이전에 존재하는 시간인지 확인해야함
                //1)하루안에 시간 차이   06-24 13:00 ~ 06-24 19:00
                //2)2일 06-24 13:00 ~ 06-25 15:00
                //3)2일 이상 06-24 13:00 ~ 06-27 14:00

                if (dateList.size() == 1) { //예약 기간 : 1일
                    for (int j = timeList[0]; j <= timeList[1]; j++) {
                        Timelist timelist1 = Timelist.builder()
                                .checkNo(checkNo)
                                .timeNo(Long.valueOf(j))
                                .build();
                        timelistRepository.save(timelist1);
                    }
                } else if (dateList.size() >= 2) { //예약 기간 : 2일 이상
                    if (i == 0) {
                        for (int j = timeList[0]; j < 48; j++) {
                            Timelist timeList2 = Timelist.builder()
                                    .checkNo(checkNo)
                                    .timeNo(Long.valueOf(j))
                                    .build();
                            timelistRepository.save(timeList2);
                        }
                    } else if (i == dateList.size() - 1) {
                        for (int j = 0; j <= timeList[1]; j++) {
                            Timelist timeList2 = Timelist.builder()
                                    .checkNo(checkNo)
                                    .timeNo(Long.valueOf(j))
                                    .build();
                            timelistRepository.save(timeList2);
                        }
                    } else {
                        for (int j = 0; j < 48; j++) {
                            Timelist timeList2 = Timelist.builder()
                                    .checkNo(checkNo)
                                    .timeNo(Long.valueOf(j))
                                    .build();
                            timelistRepository.save(timeList2);
                        }
                    }
                }
            }

            if (cateNo == 1) {  //자원이 회의실일 경우
                for (int i = 0; i < body.getEmpNoList().size(); i++) {
                    System.out.println(body.getEmpNoList());
                    PeopleCnt peopleCnt = PeopleCnt.builder()
                            .reservNo(reservNo)
                            .userNo(Long.parseLong(body.getEmpNoList().get(i)))
                            .build();
                    peopleCntRepository.save(peopleCnt);
                }
            }

            message = Message.builder()
                    .resCode(1000)
                    .message("[Success] Insert Reservation")
                    .build();
            return new JsonResponse().send(200, message);
        }
        message = Message.builder()
                .resCode(1001)
                .message("[Fail] Insert Reservation, Duplicated Reservation")
                .build();
        return new JsonResponse().send(200, message);
    }

    public List<String> duringDate(Date start, Date end) {
        Calendar startC = Calendar.getInstance();
        Calendar endC = Calendar.getInstance();

        startC.setTime(start);
        endC.setTime(end);

        List<String> dateList = new ArrayList<>();

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");

        while (startC.compareTo(endC) != 1) {
            dateList.add(simpleDateFormat.format(startC.getTime()).toString());
            startC.add(Calendar.DATE, 1);
        }
        return dateList;
    }

    public Boolean reservationCheck(Reservation reservation, List<String> dateList, int startTime, int endTime, String type, Long reservNo) {
        System.out.println("reservation check enter!!! " + dateList.size() + "///" + dateList.get(0) + "///" + startTime + " ~~~" + endTime);

        Long resourceNo = reservation.getResourceNo();

        List<ReservationManagementDto> reservationCheckList = null;
        List<ReservationManagementDto> reservationCheckList2 = null;
        List<ReservationManagementDto> reservationCheckList3 = null;
        List<ReservationManagementDto> reservationCheckList4 = null;

        Boolean flag = false;

        if (dateList.size() == 1) {
            System.out.println("하루");
            reservationCheckList = reservationQuerydslRepository.findByReservCheckdate(resourceNo, dateList.get(0), startTime, endTime, type, reservNo);
            System.out.println(reservationCheckList);
            if (reservationCheckList != null) {
                System.out.println("reservationCheckList != null");
                if (reservationCheckList.size() == 0) {
                    System.out.println("reservationCheckList.isEmpty()");
                    flag = true;
                } else {
                    System.out.println("reservationCheckList.isNotEmpty()");
                    flag = false;
                }
            }
        } else if (dateList.size() >= 2) {
            for (int i = 0; i <= dateList.size() - 1; i++) {
                if (i == 0) {
                    reservationCheckList2 = reservationQuerydslRepository.findByReservCheckdate(resourceNo, dateList.get(i), startTime, 47, type, reservNo);
                    System.out.println("2 : " + reservationCheckList2);
                    if (reservationCheckList2 != null) {
                        System.out.println("list2 not null");
                        if (reservationCheckList2.size() == 0) {
                            System.out.println("설마");
                            flag = true;
                        } else {
                            System.out.println("혹시 여기?"+reservationCheckList2.size());
                            for (int k=0;k<reservationCheckList2.size();k++){
                                System.out.println(reservationCheckList2.get(k).getTimeNo());
                            }
                            flag = false;
                            break;
                        }
                    }
                } else if (i == dateList.size() - 1) {
                    reservationCheckList3 = reservationQuerydslRepository.findByReservCheckdate(resourceNo, dateList.get(i), 0, endTime, type, reservNo);
                    System.out.println("3 : " + reservationCheckList3);
                    if (reservationCheckList3 != null) {
                        System.out.println("list3 not null");
                        if (reservationCheckList3.size() == 0) {
                            System.out.println("혹시 여기?22");
                            flag = true;
                        } else {
                            flag = false;
                            System.out.println("혹시 여기?33");
                            break;
                        }
                    }
                } else {
                    reservationCheckList4 = reservationQuerydslRepository.findByReservCheckdate(resourceNo, dateList.get(i), 0, 47, type, reservNo);
                    System.out.println("4 : " + reservationCheckList4);
                    if (reservationCheckList4 != null) {
                        System.out.println("list4 not null");
                        if (reservationCheckList4.size() == 0) {
                            flag = true;
                        } else {
                            flag = false;
                            System.out.println("혹시 여기?44");
                            break;
                        }
                    }
                }
                System.out.println("여기는 오니?");

            }
        } else if (reservationCheckList == null && reservationCheckList2 == null
                && reservationCheckList3 == null && reservationCheckList4 == null) {
            System.out.println("all null");
            return true;
        } else {
            System.out.println("엥ㅇ");
            flag = false;
        }
        return flag;
    }

    @Transactional
    public ResponseEntity<Message> updateReservation(HttpServletRequest req, ReservationManagementDto body) throws ParseException {

        Reservation reservation = body.toEntity();

        Message message;

        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        SimpleDateFormat formatter2 = new SimpleDateFormat("yyyy-MM-dd");

        String[] start = formatter.format(body.getStartTime()).split(" ");
        String[] end = formatter.format(body.getEndTime()).split(" ");

        String startDate = start[0];
        String[] startTime = start[1].split(":");
        int startHour = Integer.parseInt(startTime[0]);
        int startMinute = Integer.parseInt(startTime[1]);

        String endDate = end[0];
        String[] endTime = end[1].split(":");
        int endHour = Integer.parseInt(endTime[0]);
        int endMinute = Integer.parseInt(endTime[1]);

        int[] timeList = new int[2];
        timeList[0] = startHour * 2 + (startMinute == 30 ? 1 : 0);
        timeList[1] = endHour * 2 + (endMinute == 30 ? 1 : 0) - 1;

        int rowcnt = (int) ((formatter2.parse(end[0]).getTime() - formatter2.parse(start[0]).getTime()) / 3600000 / 24) + 1;

        List<String> dateList = duringDate(formatter2.parse(start[0]), formatter2.parse(end[0]));

        List<Long> checkNo = reservationQuerydslRepository.findByCheckNo(body.getReservNo());  // reservation_check에서 예약번호로 check번호 찾기

        if (reservationCheck(reservation, dateList, timeList[0], timeList[1], "update", body.getReservNo())) {  // 중복예약 내역이 없을 때

        if (checkNo.size() > 1) { //이전 예약 시간 삭제( checkNo 가지고 와서) -timelist
            for (int i = 0; i < checkNo.size(); i++) {
                reservationQuerydslRepository.deleteTimelistByCheckNo(checkNo.get(i)); //이전 예약 시간 삭제 -timelist
            }
        } else {
            System.out.println("checkNO"+checkNo.size());
            if(checkNo.size()==1)
                reservationQuerydslRepository.deleteTimelistByCheckNo(checkNo.get(0)); //이전 예약 시간 삭제 -timelist
        }
        reservationQuerydslRepository.deleteByReservNo(body.getReservNo()); //reservation_check table에서 삭제

        Long cateNo = resourceRepository.findByCategory(body.getResourceNo());
            System.out.println("cateNo : "+cateNo);

        if(cateNo== 1) {
           if(!peopleCntRepository.findByReservNo(body.getReservNo()).isEmpty()) {
                   peopleCntRepository.deleteByReservNo(body.getReservNo());
           }
        }
        //reservation table 예약 내역 삭제
        reservationRepository.deleteByReservNo(body.getReservNo());

            Long reservNo = reservationRepository.save(reservation).getReservNo();
            if(body.getCateNo().equals("1")) {//자원이 회의실일 경우
                for (int i = 0; i < body.getEmpNoList().size(); i++) {
                    if (cateNo == 1) {
                        PeopleCnt peopleCnt = PeopleCnt.builder()
                                .reservNo(reservNo)
                                .userNo(Long.parseLong(body.getEmpNoList().get(i)))
                                .build();
                        peopleCntRepository.save(peopleCnt);
                    }
                }
            }

            for (int i = 0; i < dateList.size(); i++) {  //날짜마다 insert
                ReservationCheck reservationCheck = ReservationCheck.builder()
                        .resourceNo(body.getResourceNo())
                        .checkDate(dateList.get(i))
                        .cateNo(cateNo)
                        .reservNo(reservNo)
                        .build();
                Long saveCheckNo = reservationCheckRepository.save(reservationCheck).getCheckNo();

                if (dateList.size() == 1) { //예약 기간 : 1일
                    for (int j = timeList[0]; j <= timeList[1]; j++) {
                        Timelist timelist1 = Timelist.builder()
                                .checkNo(saveCheckNo)
                                .timeNo(Long.valueOf(j))
                                .build();
                        timelistRepository.save(timelist1);
                    }
                } else if (dateList.size() >= 2) { //예약 기간 : 2일 이상
                    if (i == 0) {
                        for (int j = timeList[0]; j < 48; j++) {
                            Timelist timeList2 = Timelist.builder()
                                    .checkNo(saveCheckNo)
                                    .timeNo(Long.valueOf(j))
                                    .build();
                            timelistRepository.save(timeList2);
                        }
                    } else if (i == dateList.size() - 1) {
                        for (int j = 0; j <= timeList[1]; j++) {
                            Timelist timeList2 = Timelist.builder()
                                    .checkNo(saveCheckNo)
                                    .timeNo(Long.valueOf(j))
                                    .build();
                            timelistRepository.save(timeList2);
                        }
                    } else {
                        for (int j = 0; j < 48; j++) {
                            Timelist timeList2 = Timelist.builder()
                                    .checkNo(saveCheckNo)
                                    .timeNo(Long.valueOf(j))
                                    .build();
                            timelistRepository.save(timeList2);
                        }
                    }
                }
            }
            message = Message.builder()
                    .resCode(1000)
                    .message("[Success] Update Reservation")
                    .build();
            return new JsonResponse().send(200, message);
        }else{
            message = Message.builder()
                    .resCode(1001)
                    .message("[Fail] Update Reservation Duplicated Reservation")
                    .build();
            return new JsonResponse().send(200, message);
        }
    }

    @Transactional
    public ResponseEntity<Message> reservationView(HttpServletRequest req, Long reservNo) {

        List<ReservationManagementDto> reservationView = reservationQuerydslRepository.getReservationView(reservNo);

        Message message = Message.builder()
                .resCode(1000)
                .message("[Success] Select ReservationView")
                .data(reservationView)
                .build();
        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> deleteReservation(Long reservNo){
        try {
            //checkno 찾기
            List<ReservationCheck> reservationCheck = reservationCheckRepository.findAllByReservNo(reservNo);
            List<Long> checkNoList = new ArrayList<>();

            for (int i=0;i<reservationCheck.size();i++){
                checkNoList.add(reservationCheck.get(i).getCheckNo());
            }

            for (int i=0;i<checkNoList.size();i++){
                timelistRepository.deleteAllByCheckNo(checkNoList.get(i));
            }

            reservationCheckRepository.deleteAllByReservNo(reservNo);

            peopleCntRepository.deleteByReservNo(reservNo);

            reservationRepository.deleteByReservNo(reservNo);

            Message message = Message.builder()
                    .resCode(1000)
                    .message("[Success] Delete Reservation")
                    .build();
            return new JsonResponse().send(200, message);
        }catch (Exception e){
            e.printStackTrace();
        }
        Message message = Message.builder()
                .resCode(1001)
                .message("[Fail] Delete Reservation")
                .build();
        return new JsonResponse().send(200, message);
    }
}
