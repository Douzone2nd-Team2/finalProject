package com.team2.backend.web.controller.admin;

import com.team2.backend.config.security.auth.EmployeeDetails;
import com.team2.backend.service.admin.UserService;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.admin.EmployeeManagementDto;
import com.team2.backend.web.dto.user.UserReservationDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserService userService;


    /*
    * 관리자- 사용자 관리>사용자 조회
    */

    @GetMapping("/admin/userlist")
    public ResponseEntity<Message> userList(HttpServletRequest request){
        return userService.getUserList(request);
    }

    /*
    * 관리자- 사용자 관리>사용자 상세 조회
    */
    @GetMapping("/admin/userview")
    public ResponseEntity<Message> userView(HttpServletRequest request, @RequestParam(name="userNo") String userNo){
        return userService.getUserView(request, userNo);
    }

    /*
    * 관리자- 사용자 관리>사용자 등록 및 수정
    */
    @PostMapping("/admin/usersave")
    public ResponseEntity<Message> userInsert(HttpServletRequest request, @RequestBody EmployeeManagementDto body){
        return userService.saveUser(request, body);
    }
}
