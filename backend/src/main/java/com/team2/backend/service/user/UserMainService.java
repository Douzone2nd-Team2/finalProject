package com.team2.backend.service.user;

import com.team2.backend.domain.reservation.IMainReservationDto;
import com.team2.backend.domain.reservation.ReservationQuerydslRepository;
import com.team2.backend.domain.reservation.ReservationRepository;
import com.team2.backend.domain.resource.ResourceRepository;
import com.team2.backend.web.dto.JsonResponse;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.admin.IResourceAdminDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UserMainService {

    private final ResourceRepository resourceRepository;
    private final ReservationRepository reservationRepository;
    private final ReservationQuerydslRepository reservationQuerydslRepository;

    @Transactional
    public ResponseEntity<Message> getSearchList(String keyword){
        List<IResourceAdminDto> searchList = resourceRepository.getfindKeyword(keyword);

        if(searchList.isEmpty()) {
            Message message = Message.builder()
                    .resCode(3001)
                    .message("실패: keyword검색 실패")
                    .build();
            return new JsonResponse().send(400, message);

        }
        Message message = Message.builder()
                    .resCode(3000)
                    .message("성공: keyword검색 성공")
                    .data(searchList)
                    .build();
        return new JsonResponse().send(400, message);
    }

    @Transactional
    public ResponseEntity<Message> getMainList(HttpServletRequest request) {

        Long userNo = (Long)request.getAttribute("userNo");
        List<IMainReservationDto> reservationList = reservationRepository.getMainReservList(userNo);

        Message message = Message.builder()
                .message("[SUCCESS] Select ReservationList")
                .data(reservationList)
                .resCode(1000)
                .build();
        return new JsonResponse().send(200, message);
    }
}
