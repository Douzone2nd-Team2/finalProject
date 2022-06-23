package com.team2.backend.web.controller.admin;

import com.team2.backend.service.admin.ReservationService;
import com.team2.backend.service.admin.UserService;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.admin.ReservationManagementDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;

@RequiredArgsConstructor
@RestController
public class ReservationController {

    private final UserService userService;

    private final ReservationService reservationService;

    /*
    * 관리자- 예약관리>사용자 조회
    */
    @GetMapping("/admin/reservation/user")
    public ResponseEntity<Message> reservUserList(HttpServletRequest request){
        return userService.getUserList(request);
    }

    @GetMapping("/admin/reservation/user/bookinglist")
    public ResponseEntity<Message> userBookingList(HttpServletRequest request, @RequestParam String userNo) throws ParseException {
        return userService.getUserBookingList(request, Long.parseLong(userNo));
    }

    @GetMapping("/admin/reservation/resource")  //채린님 만든거 가져오기
    public ResponseEntity<Message> reservResourceList(HttpServletRequest request){
        return null;
    }

    @GetMapping("/admin/reservation/resource/bookinglist")  //채린님 만든거 가져오기
    public ResponseEntity<Message> resourceBookingList(HttpServletRequest request){
        return null;
    }

    @PostMapping("/admin/reservation/save")
    public ResponseEntity<Message> saveReservation(HttpServletRequest request, @RequestBody ReservationManagementDto body) throws ParseException {
        return reservationService.saveReservation(request, body);
    }

    @PostMapping("/admin/reservation/modify")
    public ResponseEntity<Message> updateReservation(HttpServletRequest request, @RequestBody ReservationManagementDto body) throws ParseException {
        return reservationService.updateReservation(request, body);
    }
}
