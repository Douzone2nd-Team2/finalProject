package com.team2.backend.domain.user;

import com.querydsl.core.QueryFactory;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.team2.backend.web.dto.admin.EmployeeManagementDto;
import com.team2.backend.web.dto.admin.QEmployeeManagementDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

import static com.team2.backend.domain.user.QDepartment.department;
import static com.team2.backend.domain.user.QEmployee.employee;
import static com.team2.backend.domain.user.QGrade.grade;


@Repository
@RequiredArgsConstructor
public class EmployeeQuerydslRepositoryImpl implements  EmployeeQuerydslRepository{

    private final JPAQueryFactory jpaQueryFactory;

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<EmployeeManagementDto> getAllEmployeeList() {

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

    @Override
    public List<EmployeeManagementDto> getEmployeeView(String userNo){

        return (List<EmployeeManagementDto>) jpaQueryFactory
                .select(new QEmployeeManagementDto(
                        employee.no,
                        employee.able,
                        employee.birth,
                        employee.email,
                        employee.empNo,
                        employee.name,
                        employee.password,
                        employee.phone,
                        employee.userId,
                        employee.deptNo,
                        employee.gradeNo,
                        employee.imageUrl,
                        employee.createAt,
                        employee.modifyAt,
                        department.deptName,
                        grade.gradeName
                ))
                .from(employee)
                .join(employee.dept, department)
                .join(employee.grade, grade)
                .where(employee.no.eq(Long.parseLong(userNo)))
                .fetch();
    }

    @Override
    public List<EmployeeManagementDto> getMainEmployee(Long no) {
        return (List<EmployeeManagementDto>) jpaQueryFactory
                .select(new QEmployeeManagementDto(
                        employee.no,
                        employee.name,
                        employee.userId,
                        employee.birth,
                        employee.phone,
                        employee.email,
                        employee.empNo,
                        department.deptName,
                        grade.gradeName
                ))
                .from(employee)
                .join(employee.dept, department)
                .join(employee.grade, grade)
                .where(employee.able.eq("Y"),
                        employee.no.eq(no))
                .fetch();
    }
}
