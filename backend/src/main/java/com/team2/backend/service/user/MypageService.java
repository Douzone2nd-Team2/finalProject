package com.team2.backend.service.user;

import com.team2.backend.config.security.auth.EmployeeDetails;
import com.team2.backend.domain.reservation.IMainReservationDto;
import com.team2.backend.domain.reservation.ReservationRepository;
import com.team2.backend.domain.user.Employee;
import com.team2.backend.domain.user.EmployeeQuerydslRepository;
import com.team2.backend.domain.user.EmployeeRepository;
import com.team2.backend.web.dto.JsonResponse;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.admin.EmployeeManagementDto;
import com.team2.backend.web.dto.admin.ReservationManagementDto;
import com.team2.backend.web.dto.user.MyReservDto;
import com.team2.backend.web.dto.user.MyReservationInfoDto;
import com.team2.backend.web.dto.user.MypageDto;
import com.team2.backend.web.dto.user.UserReservationDto;
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

    private final ReservationRepository reservationRepository;


    @Transactional
    public ResponseEntity<Message> changePw(@AuthenticationPrincipal EmployeeDetails employeeDetails, MypageDto body){


        Long userNo = employeeDetails.getEmployee().getNo();
        Employee employee = employeeRepository.findByNo(userNo);
        if(!bCryptPasswordEncoder.matches(body.getPassword(), employee.getPassword())){
            System.out.println("현재 비밀번호 불일치");
            Message message = Message.builder()
                    .resCode(2002)
                    .message("[Fail] Matches password")
                    .build();
            return new JsonResponse().send(400, message);
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
    public ResponseEntity<Message> employeeView(HttpServletRequest request, @AuthenticationPrincipal EmployeeDetails employeeDetails) {
        List<EmployeeManagementDto> employee = employeeQuerydslRepository.getMainEmployee(employeeDetails.getEmployee().getUserId());

        Message message = Message.builder()
                .resCode(2000)
                .message("[SUCCESS] Select Employee View")
                .data(employee)
                .build();
        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> getMyReservationInfo(MyReservDto body) {
        List<IMainReservationDto> result = reservationRepository.getMyReservationInfo(body.getReservNo());
        if (result == null) {
            Message message = Message.builder()
                    .resCode(4001)
                    .message("[FAIL] No Resvation")
                    .build();
            return new JsonResponse().send(400, message);
        }

        Message message = Message.builder()
                .resCode(4000)
                .message("[SUCCESS] Get Resvation Info")
                .data(result.get(0))
                .build();
        return new JsonResponse().send(200, message);
    }
}









