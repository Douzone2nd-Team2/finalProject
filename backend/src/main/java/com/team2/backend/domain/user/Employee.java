package com.team2.backend.domain.user;

import com.team2.backend.domain.util.BaseTime;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Getter
@Table(name="employee", uniqueConstraints=@UniqueConstraint(columnNames={"empno"}))
@NoArgsConstructor
@AllArgsConstructor
@DynamicUpdate
@DynamicInsert
@Builder
public class Employee extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="no", updatable = false, nullable = false)
    private Long no;

    @Column(name="able", columnDefinition = "default 'Y'")
    private char able;

    @Column(name="userid")
    private String userId;

    @Column(name="password")
    private String password;

    @Column(name="name")
    private String name;

    @Column(name="empno")
    private String empNo;

    @Column(name="birth")
    private String birth;

    @Column(name="email")
    private String email;

    @Column(name="phone")
    private String phone;

    @ManyToOne(targetEntity=Department.class, fetch=FetchType.LAZY)
    @JoinColumn(name="deptno")
    @Column(name="dept")
    private Long dept;

    @Column(name="grade")
    private Long grade;


    @OneToOne(mappedBy = "Employee")
    private EmployeeFile employeeFile;
}
