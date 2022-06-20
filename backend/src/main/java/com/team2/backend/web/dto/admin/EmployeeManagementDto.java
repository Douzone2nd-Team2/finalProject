package com.team2.backend.web.dto.admin;

import com.querydsl.core.annotations.QueryProjection;
import com.team2.backend.domain.user.Employee;
import lombok.Builder;
import lombok.Getter;

import java.util.Date;

@Getter
public class EmployeeManagementDto {

    private Long no;
    private String able;
    private String birth;
    private String email;
    private String empNo;
    private String name;
    private String password;
    private String phone;
    private String userid;
    private String deptNo;
    private String gradeNo;
    private Date createAt;
    private Date modifyAt;

    private Employee employee;

    private String gradeName;
    private String deptName;

    @QueryProjection
    @Builder
    public EmployeeManagementDto(Employee employee, String gradeName, String deptName) {
        this.employee = employee;
        this.gradeName = gradeName;
        this.deptName = deptName;
    }

    @QueryProjection
    @Builder
    public EmployeeManagementDto(Long no, String able, String empNo, String name, String userid, String gradeName, String deptName) {
        this.no = no;
        this.able = able;
        this.empNo = empNo;
        this.name = name;
        this.userid = userid;
        this.gradeName = gradeName;
        this.deptName = deptName;
    }
}
