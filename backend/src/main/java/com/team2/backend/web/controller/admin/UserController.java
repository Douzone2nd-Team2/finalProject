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
        System.out.println("userview enter!!");
        return userService.getUserView(request, userNo);
    }

    /*
    * 관리자- 사용자 관리>사용자 등록 및 수정
    */
    @PostMapping("/admin/usersave")
    public ResponseEntity<Message> userInsert(HttpServletRequest request, @RequestBody EmployeeManagementDto body){
        return userService.saveUser(request, body);
    }

    @PostMapping("/admin/user/changepw")
    public ResponseEntity<Message> userChangePW(@RequestBody MypageDto body){
        System.out.println("change");
        return userService.changePw(body);
    }

    @PostMapping("/admin/userfile")
    public ResponseEntity<Message> userFileInsert(
            @RequestPart(value = "file", required = false) MultipartFile[] multipartFile, @RequestPart(value="employee") EmployeeManagementDto employee) throws JsonProcessingException {
//            @RequestParam Map<String, Object> allParameters) throws JsonProcessingException {
        //System.out.println(multipartFile[0]);
//        if(multipartFile.length == 0)
        System.out.println("userfile enter!!");
        if(multipartFile == null){
            System.out.println("empty multipart");
        }
//        System.out.println(employee);

        System.out.println(employee.getUserId());
        System.out.println(employee.getNo());

        return userService.fileUpload(multipartFile == null? null :multipartFile[0], employee);
    }
}
