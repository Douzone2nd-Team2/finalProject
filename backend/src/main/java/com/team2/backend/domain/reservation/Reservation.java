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
    @Column(name="reservno")
    private Long reservNo;

    @Column(name="able", columnDefinition = "default 'Y'")
    private char able;

    @ManyToOne(targetEntity = Resource.class, fetch = FetchType.LAZY)
    @JoinColumn(name="rescourceno")
  //  @Column(name="resourceno")
    private Long resourceNo;

    @ManyToOne(targetEntity = Employee.class, fetch = FetchType.LAZY)
    @JoinColumn(name="empno")
   // @Column(name="empno")
    private String empNo;

    @Column(name="starttime")
    private Date startTime;

    @Column(name="endtime")
    private Date endTime;

}
