
package com.team2.backend.service.user;

import com.team2.backend.domain.user.Employee;
import com.team2.backend.domain.user.EmployeeRepository;
import com.team2.backend.web.dto.user.AccountsRequestDto;
import com.team2.backend.web.dto.JsonResponse;
import com.team2.backend.web.dto.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
