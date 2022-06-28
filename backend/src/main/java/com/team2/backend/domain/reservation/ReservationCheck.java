package com.team2.backend.domain.reservation;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
import java.util.Date;
import java.util.List;

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
    @JsonIgnore
    private Resource resource;
    @Column(name="resourceNo")
    private Long resourceNo;

    @Column(name="checkDate")
    private String checkDate;

    @ManyToOne(targetEntity = Category.class)
    @JoinColumn(name="cateNo", insertable = false, updatable = false)
    @JsonIgnore
    private Category cate;
    @Column(name="cateNo")
    private Long cateNo;

    // 보류 - timelist에 있어야되는거 아닌가?
//    @ManyToOne(targetEntity = Resource.class)
//    @JoinColumn(name="reservNo", insertable = false, updatable = false)
//    @JsonIgnore
//    private Resource reserv;
//    @Column(name="reservNo")
//    private Long reservNo;

    @OneToMany(mappedBy = "checkNo")
    private List<Timelist> timelist;
}
