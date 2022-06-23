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

@RequiredArgsConstructor
@Service
public class ReservationService {

    private final ReservationRepository reservationRepository;
    private final PeopleCntRepository peopleCntRepository;
    private final ReservationQuerydslRepository reservationQuerydslRepository;

    @Transactional
    public ResponseEntity<Message> saveReservation(HttpServletRequest req, ReservationManagementDto body) throws ParseException {

        Reservation reservation = body.toEntity();

        Long reservNo = reservationRepository.save(reservation).getReservNo();

        System.out.println(body.getEmpNoList());

        if(body.getResourceNo().equals("2")){  //자원이 회의실일 경우
            for (int i=0;i<body.getEmpNoList().size();i++){
                PeopleCnt peopleCnt = PeopleCnt.builder()
                        .reservNo(reservNo)
                        .userNo(Long.parseLong(body.getEmpNoList().get(i)))
                        .build();
                peopleCntRepository.save(peopleCnt);
            }
        }

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
}
