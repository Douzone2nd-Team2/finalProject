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

    @Column(name="able", columnDefinition = "varchar(1) default 'Y'")
    private String able;

    @ManyToOne(targetEntity = Resource.class)
    @JoinColumn(name="resourceNo", insertable = false, updatable = false)
    private Resource resource;
    @Column(name="resourceNo")
    private Long resourceNo;

    @ManyToOne(targetEntity = Employee.class)
    @JoinColumn(name="userNo", insertable = false, updatable = false)
    private Employee user;
    @Column(name="userNo")
    private Long userNo;

    @Column(name="reservName")
    private String reservName;

    @Column(name="startTime")
    private Date startTime;

    @Column(name="endTime")
    private Date endTime;

}
