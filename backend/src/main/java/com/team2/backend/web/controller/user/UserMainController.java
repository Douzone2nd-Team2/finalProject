package com.team2.backend.web.controller.user;

import com.team2.backend.service.admin.ResourceService;
import com.team2.backend.service.user.UserMainService;
import com.team2.backend.web.dto.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/main")
public class UserMainController {

    private final UserMainService userMainService;
    private final ResourceService resourceService;

    @GetMapping("/search/resourceName")
    public ResponseEntity<Message> getResourcenameList(@RequestParam String resourceName){
        return userMainService.getResourcenameList(resourceName);
    }

    @GetMapping("/search/option")
    public ResponseEntity<Message> getResourceoptionList(@RequestParam String option){
        return userMainService.getResourceoptionList(option);
    }

    @GetMapping("/search/fuel")
    public ResponseEntity<Message> getResourceofuelList(@RequestParam String fuel){
        return userMainService.getResourceofuelList(fuel);
    }
    @GetMapping("/{cateNo}") // 각 자원별 전체 조회
    public ResponseEntity<Message> getEachList(@PathVariable Long cateNo){
        return resourceService.getEachList(cateNo);
    }

}
