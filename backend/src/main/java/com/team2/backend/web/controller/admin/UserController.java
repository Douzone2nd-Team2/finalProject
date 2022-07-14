package com.team2.backend.web.controller.admin;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.team2.backend.config.security.auth.EmployeeDetails;
import com.team2.backend.service.admin.UserService;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.admin.EmployeeManagementDto;
import com.team2.backend.web.dto.user.MypageDto;
import com.team2.backend.web.dto.user.UserReservationDto;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserService userService;


    /*
    * 관리자- 사용자 관리>사용자 조회
    */

    @GetMapping("/admin/userlist")
    public ResponseEntity<Message> userList(HttpServletRequest request){
        return userService.getUserList(request);
    }

    /*
    * 관리자- 사용자 관리>사용자 상세 조회
    */
    @GetMapping("/admin/userview")
    public ResponseEntity<Message> userView(HttpServletRequest request, @RequestParam(name="userNo") String userNo){
        return userService.getUserView(request, userNo);
    }

    /*
    * 관리자- 사용자 관리>사용자 등록 
    */
    @PostMapping("/admin/usersave")
    public ResponseEntity<Message> userInsert( @RequestPart(value = "file", required = false) MultipartFile[] multipartFile, @RequestPart(value="employee") EmployeeManagementDto employee){
        return userService.saveUser(multipartFile == null? null :multipartFile[0], employee);
    }

    @PostMapping("/admin/user/changepw")
    public ResponseEntity<Message> userChangePW(@RequestBody MypageDto body){
        return userService.changePw(body);
    }

    @PostMapping("/admin/usermodify") //사용자 수정
    public ResponseEntity<Message> userFileInsert(
            @RequestPart(value = "file", required = false) MultipartFile[] multipartFile, @RequestPart(value="employee") EmployeeManagementDto employee) {
        return userService.fileUpload(multipartFile == null? null :multipartFile[0], employee);
    }

    @PostMapping("/admin/userdelete")
    public ResponseEntity<Message> userDelete(@RequestBody EmployeeManagementDto body){
        return userService.deleteUser(body.getNo());
    }
}
