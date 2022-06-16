package com.team2.backend.web.controller.user;

import com.team2.backend.service.user.ReserveService;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.user.UserReservationDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
@RestController
public class ReserveController {

    private final ReserveService reserveService;

    @PostMapping("/reserve")
    public ResponseEntity<Message> reserve() {
        System.out.println("getList");
        return reserveService.getResourceList();
    }

    @PostMapping("/reserve/office")
    public ResponseEntity<Message> reserveOffice(HttpServletRequest req, @RequestBody UserReservationDto body) {
        System.out.println("office");
        return reserveService.reserveOffice(req, body);
    }
//    @PostMapping("/reserve/car")
//    @PostMapping("/reserve/laptop")
}
