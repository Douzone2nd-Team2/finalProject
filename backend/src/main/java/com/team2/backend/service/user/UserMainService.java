package com.team2.backend.service.user;

import com.team2.backend.config.security.auth.EmployeeDetails;
import com.team2.backend.domain.reservation.IMainReservationDto;
import com.team2.backend.domain.reservation.ReservationQuerydslRepository;
import com.team2.backend.domain.reservation.ReservationRepository;
import com.team2.backend.domain.resource.ResourceRepository;
import com.team2.backend.web.dto.JsonResponse;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.admin.IResourceAdminDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UserMainService {

    private final ResourceRepository resourceRepository;
    private final ReservationRepository reservationRepository;
    private final ReservationQuerydslRepository reservationQuerydslRepository;

    @Transactional
    public ResponseEntity<Message> getSearchList(String keyword){
        List<IResourceAdminDto> searchConferenceList = resourceRepository.getfindKeyword(keyword, 1L);
        List<IResourceAdminDto> searchCarList = resourceRepository.getfindKeyword(keyword, 2L);
        List<IResourceAdminDto> searchNotebookList = resourceRepository.getfindKeyword(keyword, 3L);

        HashMap<String, List<IResourceAdminDto>> data = new HashMap<>();
        data.put("searchConferenceList",searchConferenceList);
        data.put("searchCarList",searchCarList);
        data.put("searchNotebookList",searchNotebookList);

        Message message = Message.builder()
                    .resCode(3000)
                    .message("[SUCCESS]: keyword검색 성공")
                    .data(data)
                    .build();
        return new JsonResponse().send(200, message);
    }
    @Transactional
    public ResponseEntity<Message> getpiechartList(HttpServletRequest request) {
        HashMap<String, Double> data= new HashMap<>();
       //카테고리별 분류
        IMainReservationDto frequencyUsageList1 = reservationRepository.getMainFrequencyUsageList(1);
        IMainReservationDto frequencyUsageList2 = reservationRepository.getMainFrequencyUsageList(2);
        IMainReservationDto frequencyUsageList3 = reservationRepository.getMainFrequencyUsageList(3);

        Double conferenece;
        Double car;
        Double notebook;

        if(frequencyUsageList1 == null){
            conferenece = 0.0;
        }else{
            conferenece = (((double) frequencyUsageList1.getTimeCnt() / (double) frequencyUsageList1.getResourceCnt()));
        }

        if(frequencyUsageList2 == null){
            car = 0.0;
        }else{
            car = (((double) frequencyUsageList2.getTimeCnt() / (double) frequencyUsageList2.getResourceCnt()));
        }

        if(frequencyUsageList3 == null){
            notebook = 0.0;
        }else{
            notebook = (((double) frequencyUsageList3.getTimeCnt() / (double) frequencyUsageList3.getResourceCnt()));
        }
        data.put("frequencyUsageList1", conferenece);
        data.put("frequencyUsageList2", car);
        data.put("frequencyUsageList3", notebook);

        Message message = Message.builder()
                .message("[SUCCESS] Select MainDashBoard - piechart")
                .data(data)
                .resCode(1000)
                .build();
        return new JsonResponse().send(200, message);

    }

    @Transactional
    public ResponseEntity<Message> getrecommendList(HttpServletRequest request) {
        IMainReservationDto recommendConference = reservationRepository.getMainRecommendList(1);
        IMainReservationDto recommendCar = reservationRepository.getMainRecommendList(2);
        IMainReservationDto recommendNotebook = reservationRepository.getMainRecommendList(3);

        HashMap<String, IMainReservationDto> data = new HashMap<>();
        data.put("recommendConference", recommendConference);
        data.put("recommendCar", recommendCar);
        data.put("recommendNotebook", recommendNotebook);


        Message message = Message.builder()
                .message("[SUCCESS] Select MainDashBoard - bookList")
                .data(data)
                .resCode(1000)
                .build();
        return new JsonResponse().send(200, message);

    }

    @Transactional
    public ResponseEntity<Message> getbookList(HttpServletRequest request, @AuthenticationPrincipal EmployeeDetails employeeDetails) {

        Long userNo = employeeDetails.getEmployee().getNo();
        List<IMainReservationDto> reservationList = reservationRepository.getMainReservList(userNo);

        HashMap<String, List<IMainReservationDto>> data = new HashMap<>();
        data.put("reservationList",reservationList);

        if(reservationList.isEmpty()){
            Message message = Message.builder()
                    .message("[FAIL] Select MainDashBoard - bookList FAIL")
                    .resCode(1001)
                    .build();
            return new JsonResponse().send(400, message);

        }

        Message message = Message.builder()
                .message("[SUCCESS] Select MainDashBoard - bookList")
                .data(data)
                .resCode(1000)
                .build();
        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> getMainStickChart(HttpServletRequest request, Long cateNo) throws ParseException {

        List<IMainReservationDto> hourConference = reservationRepository.getMainHourList(cateNo);

        int totalCnt = reservationRepository.getResourceTotalCnt(cateNo);

        String startDate = reservationRepository.getStartDate();
        String endDate = reservationRepository.getEndDate();
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

        Date start = format.parse(startDate);
        Date end = format.parse(endDate);

        long Days = (end.getTime() - start.getTime())/(1000*24*60*60);

        HashMap<String, Object> data = new HashMap<>();
        data.put("days", Days+1L);
        data.put("totalCnt", totalCnt);
        data.put("hourConference", hourConference);

        Message message = Message.builder()
                .message("[SUCCESS] Select MainStickChart")
                .resCode(1000)
                .data(data)
                .build();
        return new JsonResponse().send(200, message);
    }
}
