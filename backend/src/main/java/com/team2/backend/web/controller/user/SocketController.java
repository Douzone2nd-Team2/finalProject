package com.team2.backend.web.controller.user;

import com.team2.backend.domain.bookmark.reservation.ReservationRepository;
import com.team2.backend.domain.user.EmployeeRepository;
import com.team2.backend.service.user.SocketService;
import com.team2.backend.web.dto.SocketMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@RequiredArgsConstructor
@Controller
public class SocketController {

    private final SocketService socketService;
    private final EmployeeRepository employeeRepository;
    private final ReservationRepository reservationRepository;

    @MessageMapping("/public") // 관리자 공지사항용 브로드캐스트
    @SendTo("/announce/public")
    public SocketMessage makeAnnouncement(@Payload SocketMessage message) {
        return null;
    }

    @MessageMapping("/timelist")
    public SocketMessage getTimelist(@Payload SocketMessage message){
        return socketService.getTimelist(message);
    }

    @MessageMapping("/progress")
    public SocketMessage checkReservation(@Payload SocketMessage message) {
        return socketService.checkReservation(message);
    }
    @MessageMapping("/finish")
    public SocketMessage makeReservation(@Payload SocketMessage message) {
        return socketService.makeReservation(message);
    }
}
