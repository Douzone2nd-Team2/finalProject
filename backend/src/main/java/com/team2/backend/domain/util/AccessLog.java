package com.team2.backend.domain.util;

import com.team2.backend.domain.user.Employee;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="access_log")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@DynamicUpdate
@Builder
public class AccessLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="accesNo")
    private Long accessNo;

    @Column(name="urlName")
    private String urlName;

    @Column(name="ip")
    private String ip;

    @ManyToOne(targetEntity = Employee.class)
    @JoinColumn(name="userNo", insertable = false, updatable = false)
    private Employee user;
    @Column(name="userNo")
    private Long userNo;

    @CreatedDate
    @Column(name="createAt")
    private LocalDateTime createAt;


}
