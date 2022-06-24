package com.team2.backend.domain.resource;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.team2.backend.domain.user.Employee;
import com.team2.backend.domain.util.BaseTime;
import com.team2.backend.web.dto.admin.ResourceDto;
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
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Resource extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "resourceNo")
    private Long resourceNo;

    @ManyToOne(targetEntity = Category.class)
    @JoinColumn(name = "cateNo", insertable = false, updatable = false)
    private Category category;
    @Column(name = "cateNo")
    private Long cateNo;

    @Column(name = "able", columnDefinition = "varchar(1) default 'Y'")
    private String able;

    @Column(name = "resourceName")
    private String resourceName;

    @Column(name = "location")
    private String location;

    @Column(name = "people")
    private int people;

    @Column(name = "availableTime")
    private String availableTime;

    @ManyToOne(targetEntity = Employee.class)
    @JoinColumn(name = "adminNo", insertable = false, updatable = false)
    private Employee admin;

    @Column(name = "adminNo")
    private Long adminNo;

    @Column(name = "option")
    private String option;

    @Column(name = "fuel")
    private String fuel;   //차량만 사용

    public void update(Long category, String able, String resourceName, String location, Integer people,
                       String availableTime, Long adminNo, String option, String fuel) {
        this.cateNo = category;
        this.able = able;
        this.resourceName = resourceName;
        this.location = location;
        this.people = people;
        this.availableTime = availableTime;
        this.adminNo = adminNo;
        this.option = option;
        this.fuel = fuel;
    }
}
