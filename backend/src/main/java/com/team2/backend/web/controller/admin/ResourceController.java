package com.team2.backend.web.controller.admin;

import com.sun.istack.NotNull;
import com.team2.backend.config.security.auth.EmployeeDetails;
import com.team2.backend.domain.resource.Resource;
import com.team2.backend.service.admin.ResourceService;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.admin.EmployeeManagementDto;
import com.team2.backend.web.dto.admin.ResourceAdminDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.List;


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

    @GetMapping("/detail") // 각 자원별 전체 조회
    public ResponseEntity<Message> getResourceNoList(@RequestParam("resourceNo") Long resourceNo){
        return resourceService.getResourceNoList(resourceNo);
    }

    @GetMapping("/bookmark") // 북마크 전체 조회
   public ResponseEntity<Message> getBookmark(){
        return resourceService.getBookmark();
    }
//
//    @PostMapping("/fileupload") // 사진 등록
//    public ResponseEntity<Message> fileRegister(@RequestPart(value = "images", required = false) List<MultipartFile> images, String able, Long resourceNo){
//        return resourceService.fileupload((images != null?images:null),able,resourceNo);
//    }
    @PostMapping("/fileupload") // 사진 등록
    public ResponseEntity<Message> fileRegister(@RequestPart(value = "images", required = false) List<MultipartFile> images, @RequestPart(value="resource") ResourceAdminDto resource){
        return resourceService.fileupload((images != null?images:null), resource);
    }

//    @PostMapping("/fileupload")
//    public ResponseEntity<Message> createVehicle(@Valid VehicleUpdateDTO
//                                                                 vehicleUpdateDTO, @NotNull List<MultipartFile> files) {
//        return resourceService.fileupload((files != null?files:null),able,resourceNo);
//    }


    @PostMapping("/register") // 자원 등록
    public ResponseEntity<Message> resourseRegister(@RequestBody ResourceAdminDto resourceAdminDto){
        return resourceService.resourceRegister(resourceAdminDto);
    }

    @PutMapping("/update")
    public ResponseEntity<Message> updateresourceList(HttpServletRequest req, @RequestParam("resourceNo") Long resourceNo , @RequestBody Resource resource){
        return resourceService.resourceUpdate(req, resourceNo, resource);
    }
    @PostMapping("/fileupdate") // 사진 수정
    public ResponseEntity<Message> fileUpdate(@RequestPart(value = "image") List<MultipartFile> multipartFile,String able, @RequestParam("resourceNo") Long resourceNo ){
        return resourceService.fileUpdate(multipartFile, able,resourceNo);
    }

    @PostMapping("/delete")
    public ResponseEntity<Message> delResource(@RequestBody ResourceAdminDto body){
        return resourceService.delresourceList(body.getResourceNo());
    }

}
