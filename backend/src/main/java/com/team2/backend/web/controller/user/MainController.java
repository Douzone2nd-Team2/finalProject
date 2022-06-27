package com.team2.backend.web.controller.user;

import com.team2.backend.web.dto.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
@RestController
public class MainController {

    @GetMapping("/main")
    public ResponseEntity<Message> main(HttpServletRequest request){




    }
}
