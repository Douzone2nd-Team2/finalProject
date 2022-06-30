package com.team2.backend.web.controller.user;

import com.amazonaws.services.xray.model.Http;
import com.team2.backend.config.security.auth.EmployeeDetails;
import com.team2.backend.service.user.MypageService;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.user.MypageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
@RestController
public class MypageController {

    private final MypageService mypageService;

    @PostMapping("/mypage/changepw")
    public ResponseEntity<Message> chagePw(HttpServletRequest request, @RequestBody MypageDto body){
        return mypageService.changePw(request, body);
    }

    @GetMapping("/mypage/user")
    public ResponseEntity<Message> employeeView(HttpServletRequest request){
        return mypageService.employeeView(request);
    }
}
