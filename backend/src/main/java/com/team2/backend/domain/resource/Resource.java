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
    @Column(name="resourceno")
    private Long resourceNo;


    @Column(name="category")
    private Long category;

    @Column(name="able", columnDefinition = "default 'Y'")
    private char able;

    @Column(name="name")
    private String name;

    @Column(name="location")
    private String location;

    @Column(name="people")
    private int people;

    @Column(name="availabletime")
    private String availableTime;

    @ManyToOne(targetEntity = Employee.class)
    @JoinColumn(name = "no")
    //@Column(name="amdinno")
    private String adminNo;

    @Column(name="option")
    private String option;

    @Column(name="fuel")
    private String fuel;   //차량만 사용





}
