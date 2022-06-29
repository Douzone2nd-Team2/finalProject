package com.team2.backend.domain.reservation;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.team2.backend.domain.resource.Category;
import com.team2.backend.domain.resource.Resource;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name="reservation_check")
@Getter
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ReservationCheck {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="checkNo")
    private Long checkNo;

    @ManyToOne(targetEntity = Resource.class)
    @JoinColumn(name="resourceNo", insertable = false, updatable = false)
    private Resource resource;
    @Column(name="resourceNo")
    private Long resourceNo;

    @Column(name="checkDate")
    private String checkDate;

    @ManyToOne(targetEntity = Category.class)
    @JoinColumn(name="cateNo", insertable = false, updatable = false)
    private Category cate;
    @Column(name="cateNo")
    private Long cateNo;

    @ManyToOne(targetEntity = Reservation.class)
    @JoinColumn(name="reservNo", insertable = false, updatable = false)
    private Reservation reserv;
    @Column(name="reservNo")
    private Long reservNo;

}
