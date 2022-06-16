package com.team2.backend.web.controller.admin;

import com.team2.backend.domain.resource.Resource;
import com.team2.backend.service.AdminService.ResourceService;
import com.team2.backend.web.dto.admin.ResourceDto;
import com.team2.backend.web.dto.JsonResponse;
import com.team2.backend.web.dto.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("resource")
public class ResourceController {
    private final ResourceService resourceService;

    @GetMapping // 자원(회의실, 차량, 노트북) 전체 조회
    public List<Resource> getResourceList(){
        return resourceService.getResourceList();
    }

    @GetMapping("/{category}") // 각 자원별 전체 조회
    public ResponseEntity<Message> getEachList(@PathVariable("category") long category){
        List<Resource> officelist = resourceService.getEachList(category);
        Message message = Message.builder()
                .resCode(3000)
                .message("각 자원별 전체조회")
                .data(officelist)
                .build();
        return new JsonResponse().send(200, message);

    }

    @PostMapping("/officereg") // 회의실 등록
    public ResponseEntity<Message> postRegister(@RequestBody ResourceDto resourceDto){
        ResourceDto office = resourceService.register(resourceDto);
        Message message = Message.builder()
                .resCode(3000)
                .message("회의실 등록")
                .data(office)
                .build();
        return new JsonResponse().send(200, message);
    }

}
