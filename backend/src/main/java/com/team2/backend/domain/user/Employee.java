package com.team2.backend.domain.user;

import com.team2.backend.domain.util.BaseTime;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Getter
@Table(name="employee", uniqueConstraints=@UniqueConstraint(columnNames={"empNo"}))
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

    @Column(name="able", columnDefinition = "varchar(1) default 'Y'")
    private String able;

    @Column(name="userId")
    private String userId;

    @Column(name="password")
    private String password;

    @Column(name="name")
    private String name;

    @Column(name="empNo")
    private String empNo;

    @Column(name="birth")
    private String birth;

    @Column(name="email")
    private String email;

    @Column(name="phone")
    private String phone;

    @ManyToOne(targetEntity=Department.class)
    @JoinColumn(name="deptNo", insertable = false, updatable = false)
    private Department dept;
    @Column(name="deptNo")
    private Long deptNo;

    @ManyToOne(targetEntity=Grade.class)
    @JoinColumn(name="gradeNo", insertable = false, updatable = false)
    private Grade grade;
    @Column(name="gradeNo")
    private Long gradeNo;

    public void encodePassword(String password) {
        this.password = password;
    }
}
