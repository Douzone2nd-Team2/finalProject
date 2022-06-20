package com.team2.backend.domain.resource;

import com.team2.backend.domain.user.Employee;
import com.team2.backend.domain.util.BaseTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name="resource")
@Getter
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
@Builder
public class Resource extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="resourceNo")
    private Long resourceNo;


    @ManyToOne(targetEntity = Category.class)
    @JoinColumn(name = "cateNo", insertable = false, updatable = false)
    private Category category;
    @Column(name = "cateNo")
    private Long cateNo;

    @Column(name="able", columnDefinition = "varchar(1) default 'Y'")
    private String able;

    @Column(name="resourceName")
    private String resourceName;

    @Column(name="location")
    private String location;

    @Column(name="people")
    private Integer people;

    @Column(name="availableTime")
    private String availableTime;

    @ManyToOne(targetEntity = Employee.class)
    @JoinColumn(name = "adminNo", insertable = false, updatable = false)
    private Employee admin;
    @Column(name="adminNo")
    private Long adminNo;

    @Column(name="option")
    private String option;

    @Column(name="fuel")
    private String fuel;   //차량만 사용





}
