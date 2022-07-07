package com.team2.backend.web.dto.admin;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.querydsl.core.annotations.QueryProjection;
import com.querydsl.core.types.EntityPath;
import com.team2.backend.domain.user.Employee;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
@NoArgsConstructor
public class EmployeeManagementDto{

    private Long no;
    private String able;
    private String birth;
    private String email;
    private String empNo;
    private String name;
    private String password;
    private String phone;
    private String userId;
    private Long deptNo;
    private Long gradeNo;

    private String imageUrl;
    private String imageName;
    private LocalDateTime createAt;
    private LocalDateTime modifyAt;

    private Employee employee;

    private String gradeName;
    private String deptName;

    @QueryProjection
    @Builder
    public EmployeeManagementDto(Long no, String able, String birth, String email, String empNo, String name, String password, String phone, String userId, Long deptNo, Long gradeNo, String imageUrl, LocalDateTime createAt, LocalDateTime modifyAt, String gradeName, String deptName) {
        this.no = no;
        this.able = able;
        this.birth = birth;
        this.email = email;
        this.empNo = empNo;
        this.name = name;
        this.password = password;
        this.phone = phone;
        this.userId = userId;
        this.deptNo = deptNo;
        this.gradeNo = gradeNo;
        this.imageUrl = imageUrl;
        this.createAt = createAt;
        this.modifyAt = modifyAt;
        this.gradeName = gradeName;
        this.deptName = deptName;
    }

    @QueryProjection
    @Builder
    public EmployeeManagementDto(Long no, String able, String empNo, String name, String userId, String gradeName, String deptName) {
        this.no = no;
        this.able = able;
        this.empNo = empNo;
        this.name = name;
        this.userId = userId;
        this.gradeName = gradeName;
        this.deptName = deptName;
    }

    @QueryProjection
    public EmployeeManagementDto(Long no, String name, String userId, String birth, String phone, String email, String empNo, String deptName, String gradeName){
        this.no = no;
        this.name = name;
        this.userId = userId;
        this.birth = birth;
        this.phone = phone;
        this.email = email;
        this.empNo = empNo;
        this.deptName = deptName;
        this.gradeName = gradeName;
    }

    public Employee toEntity(){
        return Employee.builder()
                .userId(userId)
                .password(password)
                .name(name)
                .empNo(empNo)
                .birth(birth)
                .email(email)
                .phone(phone)
                .deptNo(deptNo)
                .gradeNo(gradeNo)
                .imageUrl(imageUrl)
                .imageName(imageName)
                .build();
    }

    public void encodePassword(String password) {
        this.password = password;
    }
}
