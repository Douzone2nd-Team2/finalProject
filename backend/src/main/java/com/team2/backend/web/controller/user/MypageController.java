package com.team2.backend.web.controller.user;

import com.team2.backend.service.user.MypageService;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.user.MypageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
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
}
