package com.team2.backend.web.controller.user;

import com.team2.backend.domain.reservation.Reservation;
import com.team2.backend.domain.reservation.ReservationRepository;
import com.team2.backend.domain.user.Employee;
import com.team2.backend.domain.user.EmployeeRepository;
import com.team2.backend.web.dto.SocketMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.util.List;

@RequiredArgsConstructor
@Controller
public class SocketController {


    private final EmployeeRepository employeeRepository;
    private final ReservationRepository reservationRepository;

    @MessageMapping("/public") // 관리자 공지사항용 브로드캐스트
    @SendTo("/announce/public")
    public SocketMessage makeAnnouncement(@Payload SocketMessage message) {
        return null;
    }

    @MessageMapping("/timetable")
    public SocketMessage getAvailableTime(@Payload SocketMessage message){

        // 1. 이미 예약된 테이블에서 해당 자원 + 날짜의 리스트를 가져온다 - db에서
        // 2. 예약하고 싶은 자원 + 날짜를 선택하면 가능한 시간 보여줌 - 단위시간 30분 - 18개
        // 3. 시간까지 선택하면 현재 예약중인 테이블에서 해당 자원 날짜 시간을 찾아보고 없으면 예약 진행
        // 3.1 현재 예약중 테이블에 넣고 나머지 추가 정보 입력
        // 3.2 이 시간 동안은 다른사람이 접근하면 이선좌
        // 4. 예약 완료 -> 예약 완료 테이블에 넣고 현재 예약중에서 삭제
        // 5. 소켓 끊음

        return null;
    }
}
