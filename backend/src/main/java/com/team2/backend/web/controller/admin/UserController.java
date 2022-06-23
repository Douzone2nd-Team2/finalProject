package com.team2.backend.web.controller.admin;

import com.team2.backend.service.admin.UserService;
import com.team2.backend.web.dto.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserService userService;

    @GetMapping("/admin/userlist")
    public ResponseEntity<Message> userList(HttpServletRequest request){
        System.out.println("/admin/userList 접근");
        return userService.getUserList(request);
    }

}
