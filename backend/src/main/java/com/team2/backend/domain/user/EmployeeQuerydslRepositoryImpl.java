package com.team2.backend.domain.user;

import com.querydsl.core.QueryFactory;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.querydsl.jpa.impl.JPAUpdateClause;
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
               .orderBy(employee.no.desc())
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
                        grade.gradeName,
                        department.deptName
                ))
                .from(employee)
                .join(employee.dept, department)
                .join(employee.grade, grade)
                .where(employee.no.eq(Long.parseLong(userNo)))
                .fetch();
    }

    @Override
    public List<EmployeeManagementDto> getMainEmployee(String userId) {
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
                .where(employee.able.eq("Y").or(employee.able.eq("A")),
                        employee.userId.eq(userId))
                .fetch();
    }

    @Override
    public void changePw(Long userNo, String password){
        JPAUpdateClause updateClause = new JPAUpdateClause(entityManager, employee);

        updateClause
                .where(employee.no.eq(userNo))
                .set(employee.password, password)
                .execute();
    }
//    select e.no, e.name, e.deptno, e.gradeno, d.deptname, g.gradename from employee e
//    right outer join department d on e.deptno = d.deptno
//    right outer join grade g on e.gradeno = g.gradeno
//    where e.name like '%:keyword%' or d.deptname like '%:keyword%' or g.gradename like '%:keyword%';
//


    @Override
    public List<EmployeeManagementDto> searchPeople(String keyword){
        return (List<EmployeeManagementDto>) jpaQueryFactory
                .select(new QEmployeeManagementDto(
                        employee.no,
                        employee.name,
                        employee.empNo,
                        department.deptName,
                        grade.gradeName
                ))
                .from(employee)
                .join(employee.dept, department)
                .join(employee.grade, grade)
                .where(employee.name.contains(keyword)
                        .or(employee.empNo.contains(keyword))
                        .or(department.deptName.contains(keyword))
                        .or(grade.gradeName.contains(keyword)))
                .fetch();
    }
}
