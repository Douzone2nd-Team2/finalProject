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

    private final SimpMessagingTemplate simpMessagingTemplate;
    private final EmployeeRepository employeeRepository;
    private final ReservationRepository reservationRepository;

    @MessageMapping("/message")
    @SendTo("/chatroom/public")
    public SocketMessage receiveMessage(@Payload SocketMessage message){
        List<Reservation> testList = reservationRepository.findAll();
        SocketMessage m = message;
        m.setData(testList);
        return m;
    }
}
