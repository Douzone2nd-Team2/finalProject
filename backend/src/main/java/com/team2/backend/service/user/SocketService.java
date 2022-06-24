package com.team2.backend.service.user;

import com.team2.backend.domain.reservation.Reservation;
import com.team2.backend.domain.reservation.ReservationRepository;
import com.team2.backend.web.dto.SocketMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class SocketService {

    private final SimpMessagingTemplate simpMessagingTemplate;
    private final ReservationRepository reservationRepository;

    // 1. 이미 예약된 테이블에서 해당 자원 + 날짜의 리스트를 가져온다 - db에서
    public SocketMessage getReservations(SocketMessage message) {
        List<Reservation> reservations = reservationRepository.findAllByResourceNo(Long.parseLong((String) message.getData())); // DTO로 만들자
        SocketMessage sm = message;
        sm.setData(reservations);
        simpMessagingTemplate.convertAndSendToUser(message.getSenderName(),"/reserve", sm);
        return sm;
    }

    // 2. 예약하고 싶은 자원 + 날짜를 선택하면 가능한 시간 보여줌 - 단위시간 30분 - 18개

    // 3. 시간까지 선택하면 현재 예약중인 테이블에서 해당 자원 날짜 시간을 찾아보고 없으면 예약 진행
    // 3.1 현재 예약중 테이블에 넣고 나머지 추가 정보 입력
    // 3.2 이 시간 동안은 다른사람이 접근하면 이선좌
    public SocketMessage isAvailable(SocketMessage message) {

        return null;
    }
    // 4. 예약 완료 -> 예약 완료 테이블에 넣고 현재 예약중에서 삭제
    // 5. 소켓 끊음
}
