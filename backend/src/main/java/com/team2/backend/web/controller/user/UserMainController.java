package com.team2.backend.web.controller.user;

import com.team2.backend.service.admin.ResourceService;
import com.team2.backend.service.user.UserMainService;
import com.team2.backend.web.dto.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("main")
public class UserMainController {

    private final UserMainService userMainService;
    private final ResourceService resourceService;

    @GetMapping("/search")
    public ResponseEntity<Message> getSearchList(@RequestParam(value = "keyword") String keyword){
        return userMainService.getSearchList(keyword);
    }

    @GetMapping("/{cateNo}") // 각 자원별 전체 조회
    public ResponseEntity<Message> getEachList(@PathVariable Long cateNo){
        return resourceService.getEachList(cateNo);
    }

}
