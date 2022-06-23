package com.team2.backend.web.controller.user;

import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@RequiredArgsConstructor
@Controller
public class SocketController {

    private final SimpMessagingTemplate simpMessagingTemplate;
}
