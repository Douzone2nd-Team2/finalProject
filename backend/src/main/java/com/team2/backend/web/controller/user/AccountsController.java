
package com.team2.backend.web.controller.user;


import com.team2.backend.config.security.auth.EmployeeDetails;
import com.team2.backend.domain.user.Employee;
import com.team2.backend.service.user.AccountsService;
import com.team2.backend.web.dto.user.AccountsRequestDto;
import com.team2.backend.web.dto.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;

@RequiredArgsConstructor
@RestController
public class AccountsController {

    private final AccountsService accountsService;

    @PostMapping("/signup")
    public ResponseEntity<Message> signup(@RequestBody AccountsRequestDto req) {
        return accountsService.signup(req);
    }

    @PostMapping("/changePassword")
    public ResponseEntity<Message> changePassword(HttpServletRequest req, @RequestBody AccountsRequestDto accountsRequestDto){
        return accountsService.changePassword(accountsRequestDto);
    }

    // TEST
    @PostMapping("/main")
    public ResponseEntity<Message> main(@AuthenticationPrincipal EmployeeDetails user) {
        System.out.println(user.getEmployee().getNo());
        return accountsService.main();
    }

    @PostMapping("/admin")
    public ResponseEntity<Message> admin() {
        return accountsService.admin();
    }
}
