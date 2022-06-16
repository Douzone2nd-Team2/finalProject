package com.team2.backend.web.controller;

import com.team2.backend.service.AccountsService;
import com.team2.backend.web.dto.AccountsRequestDto;
import com.team2.backend.web.dto.JsonResponse;
import com.team2.backend.web.dto.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class accountsController {

    private final AccountsService accountsService;

    @PostMapping("/signup")
    public ResponseEntity<Message> signup(@RequestBody AccountsRequestDto req) {
        return accountsService.signup(req);
    }


    // TEST
    @PostMapping("/main")
    public ResponseEntity<Message> main() {
        return accountsService.main();
    }

    @PostMapping("/admin")

    public ResponseEntity<Message> admin() {
        return accountsService.admin();
    }
}
