package com.team2.backend.web.controller.admin;

import com.team2.backend.service.AdminService.ResourceService;
import com.team2.backend.web.dto.admin.ResourceDto;
import com.team2.backend.web.dto.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;


@RequiredArgsConstructor
@RestController
@RequestMapping("resource")
public class ResourceController {
    private final ResourceService resourceService;

    @GetMapping // 자원(회의실, 차량, 노트북) 전체 조회
    public ResponseEntity<Message> getResourceList(){
        return resourceService.getResourceList();
    }

    @GetMapping("/{category}") // 각 자원별 전체 조회
    public ResponseEntity<Message> getEachList(@PathVariable("category") long category){
        return resourceService.getEachList(category);
    }

    @PostMapping("/officereg") // 회의실 등록
    public ResponseEntity<Message> officeRegister(HttpServletRequest req, @RequestBody ResourceDto resourceDto){
        return resourceService.officeCreate(req, resourceDto);
    }

    @PostMapping("/carreg") // 차량 등록
    public ResponseEntity<Message> carRegister(HttpServletRequest req, @RequestBody ResourceDto resourceDto){
        return resourceService.carCreate(req, resourceDto);
    }

    @DeleteMapping("{no}")
    public ResponseEntity<Message> delResource(@PathVariable("no") Long resourceNo){
        return resourceService.delresourceList(resourceNo);
    }

}
