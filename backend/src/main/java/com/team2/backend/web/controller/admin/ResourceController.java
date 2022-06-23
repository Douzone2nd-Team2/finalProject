package com.team2.backend.web.controller.admin;

import com.team2.backend.domain.resource.Resource;
import com.team2.backend.service.admin.ResourceService;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.admin.ResourceAdminDto;
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

    @GetMapping("/{cateNo}") // 각 자원별 전체 조회
    public ResponseEntity<Message> getEachList(@PathVariable Long cateNo){
        return resourceService.getEachList(cateNo);
    }

    @GetMapping("/bookmark") // 북마크 전체 조회
   public ResponseEntity<Message> getBookmark(){
        return resourceService.getBookmark();
    }

    @PostMapping("/register") // 자원 등록
    public ResponseEntity<Message> resourseRegister(HttpServletRequest req, @RequestBody ResourceAdminDto resourceAdminDto){
        return resourceService.resourceRegister(req, resourceAdminDto);
    }

    @PutMapping("/update")
    public ResponseEntity<Message> updateresourceList(HttpServletRequest req, @RequestParam("resourceNo") Long resourceNo , @RequestBody Resource resource){
        System.out.println("updateController시작");
        return resourceService.resourceUpdate(req, resourceNo, resource);
    }

    @DeleteMapping
    public ResponseEntity<Message> delResource(@RequestParam("resourceNo") Long resourceNo){
        return resourceService.delresourceList(resourceNo);
    }

}
