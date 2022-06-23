
package com.team2.backend.service.user;

import com.team2.backend.domain.user.Employee;
import com.team2.backend.domain.user.EmployeeRepository;
import com.team2.backend.web.dto.user.AccountsRequestDto;
import com.team2.backend.web.dto.JsonResponse;
import com.team2.backend.web.dto.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class AccountsService {

    private final EmployeeRepository employeeRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Transactional
    public ResponseEntity<Message> signup(AccountsRequestDto req) {
        Employee findEmployee = employeeRepository.findByUserId(req.getUserId());
        if (findEmployee != null) {
            Message message = Message.builder()
                    .resCode(0)
                    .message("[WARN] Employee already exists")
                    .build();
            return new JsonResponse().send(400, message);
        }

        Employee employee = req.toEntity();
        employee.encodePassword(bCryptPasswordEncoder.encode(req.getPassword()));

        employeeRepository.save(employee);

        Message message = Message.builder()
                .resCode(1)
                .message("[SUCCESS] Signup")
                .data(employee)
                .build();
        return new JsonResponse().send(HttpStatus.OK, message);
    }

    @Transactional
    public ResponseEntity<Message> changePassword(AccountsRequestDto accountsRequestDto){
        System.out.println("changePassword 실행");

        Employee findEmployee = employeeRepository.findByUserId(accountsRequestDto.getUserId());
        if(!bCryptPasswordEncoder.matches(accountsRequestDto.getPassword(), findEmployee.getPassword())){
            System.out.println("현재 비밀번호 불일치");
            Message message = Message.builder()
                    .resCode(3001)
                    .message("실패: passwordChange 실패")
                    .build();
            return new JsonResponse().send(200, message);

        }
        System.out.println("비밀번호 변경");


        Message message = Message.builder()
                .resCode(3000)
                .message("성공: passwordChange 성공")
                .build();
        return new JsonResponse().send(200, message);
    }

    public ResponseEntity<Message> main() {
        Message message = Message.builder()
                .resCode(1)
                .message("[SUCCESS] User Main page")
                .build();
        return new JsonResponse().send(HttpStatus.OK, message);
    }

    public ResponseEntity<Message> admin() {

        Message message = Message.builder()
                .resCode(1)
                .message("[SUCCESS] Admin Main page")
                .build();
        return new JsonResponse().send(HttpStatus.OK, message);
    }

}
