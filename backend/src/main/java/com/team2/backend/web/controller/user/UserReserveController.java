package com.team2.backend.web.controller.user;

import com.team2.backend.config.security.auth.EmployeeDetails;
import com.team2.backend.service.user.UserReserveService;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.admin.ReservationManagementDto;
import com.team2.backend.web.dto.user.UserReservationDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;

@RequiredArgsConstructor
@RestController
public class UserReserveController {

    private final UserReserveService userReserveService;

    @PostMapping("/timelist")
    public ResponseEntity<Message> getTimelist(@RequestBody UserReservationDto body) throws ParseException {
        return userReserveService.anotherGetTimelist(body);
    }

    @PostMapping("/saveReservation")
    public ResponseEntity<Message> checkReservation(HttpServletRequest req, @RequestBody ReservationManagementDto body) throws ParseException {
        return userReserveService.saveReservation(req, body);
    }

    @PostMapping("/addReservationInfo")
    public ResponseEntity<Message> addReservationInfo(@AuthenticationPrincipal EmployeeDetails user,  @RequestBody ReservationManagementDto body) {
        return userReserveService.addReservationInfo(user, body);
    }

}
