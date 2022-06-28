package com.team2.backend.service.user;

import com.team2.backend.config.security.auth.EmployeeDetails;
import com.team2.backend.domain.user.Employee;
import com.team2.backend.domain.user.EmployeeQuerydslRepository;
import com.team2.backend.domain.user.EmployeeRepository;
import com.team2.backend.web.dto.JsonResponse;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.admin.EmployeeManagementDto;
import com.team2.backend.web.dto.user.MypageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RequiredArgsConstructor
@Service
public class MypageService {

    private final EmployeeRepository employeeRepository;
    private final EmployeeQuerydslRepository employeeQuerydslRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    @Transactional
    public ResponseEntity<Message> changePw(HttpServletRequest req, MypageDto body){

        System.out.println("ㅎㅇ : " + req.getAttribute("userNo"));
        Employee employee = employeeRepository.findByNo((Long)req.getAttribute("userNo"));
        System.out.println(req.getAttribute("userNo"));
        System.out.println(body.getPassword());
        if(!bCryptPasswordEncoder.matches(body.getPassword(), employee.getPassword())){
            System.out.println("현재 비밀번호 불일치");
            Message message = Message.builder()
                    .resCode(2002)
                    .message("[Fail] Matches password")
                    .build();
            return new JsonResponse().send(200, message);
        }else{
            Employee chEmployee = Employee.builder()
                            .no(employee.getNo())
                                    .build();
            employee.encodePassword(bCryptPasswordEncoder.encode(body.getChPassword()));
            employeeRepository.save(employee);
        }

        Message message = Message.builder()
                .resCode(2000)
                .message("[SUCCESS] Update password")
                .build();
        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> employeeView(HttpServletRequest request) {

        System.out.println(request.getAttribute("userNo"));
        List<EmployeeManagementDto> employee = employeeQuerydslRepository.getMainEmployee((Long)request.getAttribute("userNo"));

        Message message = Message.builder()
                .resCode(2000)
                .message("[SUCCESS] Select Employee View")
                .data(employee)
                .build();
        return new JsonResponse().send(200, message);
    }
}









