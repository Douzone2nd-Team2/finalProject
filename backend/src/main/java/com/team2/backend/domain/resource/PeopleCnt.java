package com.team2.backend.domain.resource;

import com.team2.backend.domain.reservation.Reservation;
import com.team2.backend.domain.user.Employee;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name="peoplecnt")
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
@Builder
public class PeopleCnt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="peopleno")
    private Long peopleNo;

    @ManyToOne(targetEntity = Reservation.class, fetch = FetchType.LAZY)
    @JoinColumn(name="reservno")
   // @Column(name="reservno")
    private Long reservNo;

    @ManyToOne(targetEntity = Employee.class, fetch = FetchType.LAZY)
    @JoinColumn(name="userno")
   // @Column(name="userno")
    private Long userNo;
}
