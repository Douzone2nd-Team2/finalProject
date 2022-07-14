package com.team2.backend.service.user;

import com.team2.backend.config.security.auth.EmployeeDetails;
import com.team2.backend.domain.reservation.*;
import com.team2.backend.domain.resource.PeopleCnt;
import com.team2.backend.domain.resource.PeopleCntRepository;
import com.team2.backend.domain.resource.Resource;
import com.team2.backend.domain.resource.ResourceRepository;
import com.team2.backend.domain.user.EmployeeQuerydslRepository;
import com.team2.backend.web.dto.JsonResponse;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.admin.EmployeeManagementDto;
import com.team2.backend.web.dto.user.SearchPeopleDto;
import com.team2.backend.web.dto.user.UserReservationDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ReserveService {

    private static final SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
    private static final SimpleDateFormat fullFormatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    private final ReservationRepository reservationRepository;
    private final PeopleCntRepository peopleCntRepository;
    private final ResourceRepository resourceRepository;
    private final EmployeeQuerydslRepository employeeQuerydslRepository;
    private final ReservationCheckRepository reservationCheckRepository;
    private final TimelistRepository timelistRepository;

    @Transactional
    public ResponseEntity<Message> getResourceList() {
        List<Resource> resourceList = resourceRepository.findAll();
        if (resourceList.isEmpty()) {
            Message message = Message.builder()
                    .resCode(4001)
                    .message("[WARN] Empty Resource List")
                    .build();
            return new JsonResponse().send(400, message);
        }

        Message message = Message.builder()
                .resCode(4000)
                .message("[SUCCESS] Get Resource List")
                .data(resourceList)
                .build();
        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> myReservationList(EmployeeDetails user) {
        List<Reservation> reservationList = reservationRepository.findAllByUserNo(user.getEmployee().getNo());
        Message message = Message.builder()
                .resCode(4000)
                .message("[SUCCESS] Get my reservations")
                .data(reservationList)
                .build();
        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> cancelReservation(UserReservationDto body) {
        List<ReservationCheck> checkList = reservationCheckRepository.findAllByReservNo(body.getReservNo());
        for (int i = 0; i < checkList.size(); i++) {
            timelistRepository.deleteAllByCheckNo(checkList.get(i).getCheckNo());
            reservationCheckRepository.deleteAllByCheckNo(checkList.get(i).getCheckNo());
        }

        reservationRepository.deleteAllByReservNo(body.getReservNo());

        Message message = Message.builder()
                .resCode(4000)
                .message("[SUCCESS] Cancel reservation")
                .build();
        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> updateReservation(UserReservationDto body) throws ParseException {
        Long reservNo = body.getReservNo();
        Date startDate = formatter.parse(body.getStartTime());
        Date endDate = formatter.parse(body.getEndTime());
        String startTime = body.getStartTime().split(" ")[1];
        String endTime = body.getEndTime().split(" ")[1];

        Date start = fullFormatter.parse(body.getStartTime());
        Date end = fullFormatter.parse(body.getEndTime());

        List<Date> dateList = new ArrayList<>();
        for (Date i = startDate; i.before(endDate) || i.equals(endDate); i = new Date(i.getTime() + (1000 * 60 * 60 * 24))) {
            dateList.add(i);
        }


        HashMap<String, Long[]> timelists = new HashMap<>();
        for (int i = 0; i < dateList.size(); i++) {
            if (!isAvailable(body.getResourceNo(), reservNo, formatter.format(startDate), timeParser(startTime), formatter.format(endDate), timeParser(endTime))) {
                Message message = Message.builder()
                        .resCode(4000)
                        .message("불가능")
                        .build();
                return new JsonResponse().send(200, message);
            };

        }

        Message message = Message.builder()
                .resCode(4000)
                .message("[SUCCESS] 가능")
                .build();
        return new JsonResponse().send(200, message);
    }

    public Integer timeParser(String time) {
        Integer hours = Integer.parseInt(time.split(":")[0]) * 2;
        Integer minutes = Integer.parseInt(time.split(":")[1]) == 0 ? 0 : 1;
        return hours + minutes;
    }

    @Transactional(rollbackFor = {RuntimeException.class, Exception.class})
    public Boolean isAvailable(Long resourceNo, Long reservNo, String startDate , Integer startTime, String endDate, Integer endTime) throws ParseException {

        List<ReservationCheck> checklist = null;

        if (startDate.equals(endDate)) {
            checklist = reservationCheckRepository
                    .findByResourceNoAndCheckDateAndReservNoNot(resourceNo, startDate, reservNo);
        }
        else { // 여러 날짜 예약이라면
            checklist = reservationCheckRepository
                    .findAllByResourceNoAndCheckDateBetweenAndReservNoNot(resourceNo, startDate, endDate, reservNo);
        }

        if (checklist.isEmpty()) {
            return true;
        }
        else {
            for (int i = 0; i < checklist.size(); i++) {
                ReservationCheck check = checklist.get(i);
                List<Timelist> timelist = check.getTimelist();
                for (int j = 0; j < timelist.size(); j++) {
                    Long timeNo = timelist.get(j).getTimeNo();
                    if (timeNo >= startTime && timeNo < endTime) {
                        return false;
                    }
                }
            }
            return true;
        }

    }

    @Transactional
    public ResponseEntity<Message> searchPeople(SearchPeopleDto body) {
        String keyword = body.getKeyword();
        List<EmployeeManagementDto> peopleList = null;
        try {
            peopleList = employeeQuerydslRepository.searchPeople(keyword);
        } catch(Exception e) {
            e.printStackTrace();
            Message message = Message.builder()
                    .resCode(4001)
                    .message("[Fail] 검색 실패")
                    .build();
            return new JsonResponse().send(400, message);
        }

        if (peopleList.isEmpty()) {
            Message message = Message.builder()
                    .resCode(4000)
                    .message("[SUCCESS] 빈 결과")
                    .build();
            return new JsonResponse().send(200, message);
        }

        Message message = Message.builder()
                .resCode(4000)
                .message("[SUCCESS] 검색 성공")
                .data(peopleList)
                .build();
        return new JsonResponse().send(200, message);
    }

}
