package com.team2.backend.web.controller.user;

import com.team2.backend.config.security.auth.EmployeeDetails;
import com.team2.backend.service.user.ReserveService;
import com.team2.backend.web.dto.Message;
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
public class ReserveController {

    private final ReserveService reserveService;

    @PostMapping("/reserve")
    public ResponseEntity<Message> reserve() {
        return reserveService.getResourceList();
    }

    @PostMapping("/mylist")
    public ResponseEntity<Message> mylist(@AuthenticationPrincipal EmployeeDetails user) {
        return reserveService.myReservationList(user);
    }

    @PostMapping("/cancelit")
    public ResponseEntity<Message> cancelReservation(@RequestBody UserReservationDto body) {
        return reserveService.cancelReservation(body);
    }

    @PostMapping("/updateit")
    public ResponseEntity<Message> updateReservation(@RequestBody UserReservationDto body) throws ParseException {
        return reserveService.updateReservation(body);
    }

}
