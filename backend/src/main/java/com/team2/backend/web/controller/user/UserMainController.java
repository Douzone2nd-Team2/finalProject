package com.team2.backend.web.controller.user;

import com.amazonaws.services.medialive.model.Reservation;
import com.team2.backend.service.admin.ResourceService;
import com.team2.backend.service.user.UserMainService;
import com.team2.backend.web.dto.JsonResponse;
import com.team2.backend.web.dto.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

import java.util.List;

import static com.amazonaws.services.elasticbeanstalk.model.ConfigurationOptionValueType.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("main")
public class UserMainController {

    private final UserMainService userMainService;
    private final ResourceService resourceService;

    @GetMapping
    public ResponseEntity<Message> main(HttpServletRequest request){
        System.out.println("main enter!!!!");
        return userMainService.getMainList(request);
    }

    @GetMapping("/search/resourceName")
    public ResponseEntity<Message> getResourcenameList(@RequestParam String resourceName){
        return userMainService.getResourcenameList(resourceName);

    @GetMapping("/search")
    public ResponseEntity<Message> getSearchList(@RequestParam(value = "keyword") String keyword){
        return userMainService.getSearchList(keyword);
    }

    @GetMapping("/{cateNo}") // 각 자원별 전체 조회
    public ResponseEntity<Message> getEachList(@PathVariable Long cateNo){
        return resourceService.getEachList(cateNo);
    }

}
