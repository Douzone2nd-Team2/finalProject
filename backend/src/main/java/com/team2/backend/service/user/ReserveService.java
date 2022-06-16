package com.team2.backend.service.user;

import com.team2.backend.domain.reservation.Reservation;
import com.team2.backend.domain.reservation.ReservationRepository;
import com.team2.backend.domain.resource.PeopleCnt;
import com.team2.backend.domain.resource.PeopleCntRepository;
import com.team2.backend.domain.resource.Resource;
import com.team2.backend.domain.resource.ResourceRepository;
import com.team2.backend.web.dto.JsonResponse;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.user.UserReservationDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ReserveService {

    private final ReservationRepository reservationRepository;
    private final PeopleCntRepository peopleCntRepository;
    private final ResourceRepository resourceRepository;

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

        System.out.println("여기가 범인이니");
        Message message = Message.builder()
                .resCode(4000)
                .message("[SUCCESS] Get Resource List")
                .data(resourceList)
                .build();
        System.out.println("여기가 범인이니2");
        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> reserveOffice(HttpServletRequest req, UserReservationDto body) {

        Reservation reservation = reservationRepository.save(
                Reservation.builder()
                        .resourceNo(body.getResourceNo())
                        .userNo(body.getUserNo())
                        .reservName(body.getReservName())
                        .startTime(body.getStartTime())
                        .endTime(body.getEndTime())
                        .build()
        );

        List<String> peopleCnt = body.getPeopleCnt();

        for (int i = 0; i < peopleCnt.size(); i++) {
            peopleCntRepository.save(
                    PeopleCnt.builder()
                            .reservNo(reservation.getReservNo())
                            .userNo(Long.parseLong(peopleCnt.get(i)))
                            .build()
            );
        }

        Message message = Message.builder()
                .resCode(4000)
                .message("[SUCCESS] Save reservation")
                .build();
        return new JsonResponse().send(200, message);
    }
}
