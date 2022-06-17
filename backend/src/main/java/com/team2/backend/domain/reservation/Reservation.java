package com.team2.backend.domain.reservation;

import com.team2.backend.domain.resource.Resource;
import com.team2.backend.domain.user.Employee;
import com.team2.backend.domain.util.BaseTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Table(name="reservation")
@NoArgsConstructor
@AllArgsConstructor
@DynamicUpdate
@DynamicInsert
@Builder
public class Reservation extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="reservNo")
    private Long reservNo;

    @Column(name="able", columnDefinition = "char(1) default 'Y'")
    private char able;

//    @ManyToOne(targetEntity = Resource.class)
//    @JoinColumn(name="resourceNo")
    @Column(name="resourceNo")
    private Long resourceNo;

//    @ManyToOne(targetEntity = Employee.class, fetch = FetchType.LAZY)
//    @JoinColumn(name="userNo")
    @Column(name="userNo")
    private Long userNo;

    @Column(name="reservName")
    private String reservName;

    @Column(name="startTime")
    private Date startTime;

    @Column(name="endTime")
    private Date endTime;

}
