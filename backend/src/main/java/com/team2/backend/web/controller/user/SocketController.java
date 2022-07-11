package com.team2.backend.web.controller.user;

import com.team2.backend.config.security.auth.EmployeeDetails;
import com.team2.backend.domain.reservation.Reservation;
import com.team2.backend.domain.reservation.ReservationRepository;
import com.team2.backend.domain.user.Employee;
import com.team2.backend.domain.user.EmployeeRepository;
import com.team2.backend.service.user.SocketService;
import com.team2.backend.web.dto.SocketMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageHeaders;
import org.springframework.messaging.handler.annotation.*;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.MessageHeaderAccessor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.session.SessionInformation;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.text.ParseException;
import java.util.HashMap;
import java.util.List;

@RequiredArgsConstructor
@Controller
public class SocketController {

    private final SocketService socketService;

//    @MessageMapping("/public") // 관리자 공지사항용 브로드캐스트
//    @SendTo("/announce/public")
//    public SocketMessage makeAnnouncement(@Payload SocketMessage message) {
//        return null;
//    }

//    @MessageMapping("/timelist")
//    public SocketMessage getTimelist(@Payload SocketMessage message) throws ParseException {
//        return socketService.getTimelist(message);
//    }

//    @MessageMapping("/check")
//    public SocketMessage checkReservation(@Header("simpSessionId") String sessionId, @Payload SocketMessage message) throws ParseException {
//        System.out.println(sessionId);
//        return socketService.checkReservation(message);
//    }

}
