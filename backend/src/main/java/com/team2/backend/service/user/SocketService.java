package com.team2.backend.service.user;

import com.team2.backend.domain.bookmark.reservation.Reservation;
import com.team2.backend.domain.bookmark.reservation.ReservationRepository;
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
    public SocketMessage getTimelist(SocketMessage message) {
        List<Reservation> reservations = reservationRepository.findAllByResourceNo(Long.parseLong((String) message.getData())); // DTO로 만들자
        SocketMessage sm = message;
        sm.setData(reservations);
        simpMessagingTemplate.convertAndSendToUser(message.getSenderName(),"/reserve", sm);

        return sm;
    }

    public SocketMessage checkReservation(SocketMessage message) {
        //        1. 예약하고 싶은 자원 + 날짜를 선택하면 가능한 시간 보여줌(reservation_check 테이블 활용) - 단위시간 30분 - 18개

//        2.1 현재 예약중 테이블에 넣고 나머지 추가 정보 입력
        if (isAvailable()) {
            // reservation_websocket 테이블에 넣고
            // socket 메세지로 성공 메세지 보내면
            // 클라이언트가 결과 코드 보고 추가 정보 입력 페이지로 이동
        }
//        2.2 이 시간 동안은 다른사람이 접근하면 이선좌
        else {
            // socket 메세지로 실패 메세지 보내기
            // 클라이언트가 결과 코드 보고 현재 페이지 머무르기 - 시간 수정하게
        }
        return null;
    }

    // 서비스로 빼기
    //        2. 시간까지 선택하면 현재 예약중인 테이블(reservation_websocket)에서 해당 자원 날짜 시간을 찾아보고 없으면 예약 진행
    public boolean isAvailable() {
        // 현재 예약 중 테이블에서 state가 예약 완료가 아닌 놈들 중에서
        // 자원 날짜 시간으로 현재 예약중인 테이블에서 찾아보기
        // reservation_check 에서 자원 날짜로 가져오고 -> 예약시간 리스트 받아와서 거기에 내 시간이 있는지 확인 - true, false 반환
        return true;
    }


    //        3. 예약 완료 -> 예약 완료 테이블에 넣고 현재 예약중에서 state 예약 완료로 변경
//        4. 소켓 끊음
    public SocketMessage makeReservation(SocketMessage message) {
        // 현재 예약중 테이블 state 예약 완료로 변경
        // 예약 테이블에 save
        // 예약 성공 메세지 전송 - 클라이언트는 예약 완료 페이지로 이동
        // 예약 실패 메세지 전송(db에러?) - 클라이언트는 알수없는 오류 모달? - 초기화면으로 이동
        return null;
    }
}
