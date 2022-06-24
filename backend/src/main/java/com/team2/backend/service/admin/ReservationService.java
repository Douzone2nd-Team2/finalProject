package com.team2.backend.service.admin;

import com.team2.backend.domain.reservation.Reservation;
import com.team2.backend.domain.reservation.ReservationQuerydslRepository;
import com.team2.backend.domain.reservation.ReservationRepository;
import com.team2.backend.domain.resource.PeopleCnt;
import com.team2.backend.domain.resource.PeopleCntRepository;
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
import java.util.List;

@RequiredArgsConstructor
@Service
public class ReservationService {

    private final ReservationRepository reservationRepository;
    private final PeopleCntRepository peopleCntRepository;
    private final ReservationQuerydslRepository reservationQuerydslRepository;

    @Transactional
    public ResponseEntity<Message> saveReservation(HttpServletRequest req, ReservationManagementDto body) throws ParseException {

        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        Reservation reservation = body.toEntity();

       // Long reservNo = reservationRepository.save(reservation).getReservNo();

        String[] start = formatter.format(body.getStartTime()).split(" ");
        String[] end = formatter.format(body.getEndTime()).split(" ");

        System.out.println(body.getStartTime());
        System.out.println(formatter.format(body.getStartTime()));

        System.out.println(start[1]);


        String startDate = start[0];
        String[] startTime = start[1].split(":");
        int startHour = Integer.parseInt(startTime[0]);
        int startMinute = Integer.parseInt(startTime[1]);

        String endDate = end[0];
        String[] endTime = end[1].split(":");
        int endHour = Integer.parseInt(endTime[0]);
        int endMinute = Integer.parseInt(endTime[1]);

        int[] timeList = new int[2];
        timeList[0] = startHour*2 + (startMinute == 30 ? 1 : 0);
        timeList[1] = endHour*2 + (endMinute == 30 ? 1 : 0);










//        if(body.getResourceNo().equals("2")){  //자원이 회의실일 경우
//            for (int i=0;i<body.getEmpNoList().size();i++){
//                PeopleCnt peopleCnt = PeopleCnt.builder()
//                        .reservNo(reservNo)
//                        .userNo(Long.parseLong(body.getEmpNoList().get(i)))
//                        .build();
//                peopleCntRepository.save(peopleCnt);
//            }
//        }

        Message message = Message.builder()
                         .resCode(1000)
                         .message("[Success] Insert Reservation")
                        .build();
        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> updateReservation (HttpServletRequest req, ReservationManagementDto body) throws ParseException {

        Reservation reservation = body.toEntity();

        reservationQuerydslRepository.updateReservation(body);

        if(body.getResourceNo().equals("2")){  //자원이 회의실일 경우
            for (int i=0;i<body.getEmpNoList().size();i++){
                peopleCntRepository.deleteByReservNo(body.getReservNo());
                PeopleCnt peopleCnt = PeopleCnt.builder()
                        .reservNo(body.getReservNo())
                        .userNo(Long.parseLong(body.getEmpNoList().get(i)))
                        .build();
                peopleCntRepository.save(peopleCnt);
            }
        }

        Message message = Message.builder()
                .resCode(1000)
                .message("[Success] Update Reservation")
                .build();
        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> reservationView(HttpServletRequest req, Long reservNo){

        List<ReservationManagementDto> reservationView = reservationQuerydslRepository.getReservationView(reservNo);


        Message message = Message.builder()
                .resCode(1000)
                .message("[Success] Select ReservationView")
                .data(reservationView)
                .build();
        return new JsonResponse().send(200, message);
    }
}
