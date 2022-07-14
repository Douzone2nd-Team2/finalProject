package com.team2.backend.web.controller.admin;

import com.team2.backend.service.admin.ReservationService;
import com.team2.backend.service.admin.ResourceService;
import com.team2.backend.service.admin.UserService;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.admin.ReservationManagementDto;
import com.team2.backend.web.dto.admin.ReserveDeleteDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;
import java.util.HashMap;

@RequiredArgsConstructor
@RestController
public class ReservationController {

    private final UserService userService;
    private final ReservationService reservationService;
    private final ResourceService resourceService;

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

    @GetMapping("/admin/reservation/resource")
    public ResponseEntity<Message> reservResourceList(HttpServletRequest request, @RequestParam Long cateNo){
        return resourceService.getEachList(cateNo);
    }

    @GetMapping("/admin/reservation/resource/bookinglist")
    public ResponseEntity<Message> resourceBookingList(HttpServletRequest request, @RequestParam Long resourceNo) throws ParseException {
        return resourceService.resourceBookingList(request, resourceNo);
    }

    @PostMapping("/admin/reservation/save")
    public ResponseEntity<Message> saveReservation(HttpServletRequest request, @RequestBody ReservationManagementDto body) throws ParseException {
        return reservationService.saveReservation(request, body);
    }

    @PostMapping("/admin/reservation/modify")
    public ResponseEntity<Message> updateReservation(HttpServletRequest request, @RequestBody ReservationManagementDto body) throws ParseException {
        return reservationService.updateReservation(request, body);
    }

    @GetMapping("/admin/reservation/view")
    public ResponseEntity<Message> reservationView(HttpServletRequest request, @RequestParam Long reservNo){
        return reservationService.reservationView(request, reservNo);
    }

    @PostMapping("/admin/reservation/delete")
    public ResponseEntity<Message> deleteReservation(@RequestBody ReserveDeleteDto body) throws ParseException {
        return reservationService.deleteReservation(body);
    }
}
