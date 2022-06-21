package com.team2.backend.service.admin;

import com.team2.backend.domain.user.Employee;
import com.team2.backend.domain.user.EmployeeQuerydslRepository;
import com.team2.backend.domain.user.EmployeeQuerydslRepositoryImpl;
import com.team2.backend.domain.user.EmployeeRepository;
import com.team2.backend.web.dto.JsonResponse;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.admin.EmployeeManagementDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UserService {

    private final EmployeeQuerydslRepository employeeQuerydslRepository;
    @Transactional
    public ResponseEntity<Message> getUserList(HttpServletRequest req){
        List<EmployeeManagementDto> userList = employeeQuerydslRepository.getAllEmployeeList();

        Message message = Message.builder()
                .resCode(1000)
                .message("[SUCCESS] Select all Employee")
                .data(userList)
                .build();
        return new JsonResponse().send(200, message);
    }
}
