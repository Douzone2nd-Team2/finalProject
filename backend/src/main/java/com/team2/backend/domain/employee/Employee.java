package com.team2.backend.domain.employee;

import com.team2.backend.domain.BaseTime;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;


// TEST
@Getter
@NoArgsConstructor
@Entity
@Table(name = "employee")
public class Employee extends BaseTime {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long no;

    @Column(nullable = false)
    private Character able;

    @Column(nullable = false)
    private String userId;

    @Column(nullable = false)
    private String password;

//    @Column(nullable = false)
//    private String name;
//
//    @Column(nullable = false)
//    private String empNo;
//
//    @Column(nullable = false)
//    private String birth;
//
//    @Column(nullable = false)
//    private String email;
//
//    @Column(nullable = false)
//    private String phone;
//
//    @Column(nullable = false)
//    private Integer dept;
//
//    @Column(nullable = false)
//    private Integer grade;

    @Builder
    public Employee(Character able, String userId, String password) {
        this.able = able;
        this.userId = userId;
        this.password = password;
    }

    public void encodePassword(String password) {
        this.password = password;
    }
}
