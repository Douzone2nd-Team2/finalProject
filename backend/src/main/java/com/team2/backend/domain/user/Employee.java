package com.team2.backend.domain.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.team2.backend.domain.util.BaseTime;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.time.LocalDateTime;

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
    @JsonIgnore
    private Department dept;
    @Column(name="deptNo")
    private Long deptNo;

    @ManyToOne(targetEntity=Grade.class)
    @JoinColumn(name="gradeNo", insertable = false, updatable = false)
    @JsonIgnore
    private Grade grade;
    @Column(name="gradeNo")
    private Long gradeNo;

    @Column(name="imageUrl")
    private String imageUrl;

    public void encodePassword(String password) {
        this.password = password;
    }

    public void changeEmployee(Long no, String able,String password, LocalDateTime createAt, String imageUrl){
        this.no = no;
        this.password = password;
        this.able = able;
        changeTime(createAt);
        this.imageUrl = imageUrl;
    }

    public void chaneImgUrl(String imageUrl){
        this.imageUrl = imageUrl;
    }

}
