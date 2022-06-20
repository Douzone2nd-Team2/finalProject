package com.team2.backend.domain.user;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.team2.backend.web.dto.admin.EmployeeManagementDto;
import com.team2.backend.web.dto.admin.QEmployeeManagementDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class EmployeeQuerydslRepositoryImpl implements  EmployeeQuerydslRepository{

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public List<EmployeeManagementDto> getAllEmployeeList() {

        QEmployee employee = QEmployee.employee;
        QDepartment department = QDepartment.department;
        QGrade grade = QGrade.grade;


       return (List<EmployeeManagementDto>) jpaQueryFactory
               .select(new QEmployeeManagementDto(
                       employee.no,
                       employee.able,
                       employee.empNo,
                       employee.name,
                       employee.userId,
                       grade.gradeName,
                       department.deptName
               ))
               .from(employee)
               .join(employee.dept, department)
               .join(employee.grade, grade)
               .fetch();
    }
}
