package com.team2.backend.web.dto.admin;

import com.querydsl.core.annotations.QueryProjection;
import com.team2.backend.domain.resource.Category;
import com.team2.backend.domain.user.Employee;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;


@Getter
@NoArgsConstructor
public class  ResourceAdminDto {
    private Long resourceNo;
    private Long cateNo;
    private String able;
    private String resourceName;
    private String location;
    private Integer  people;
    private String availableTime;
    private Long adminNo;
    private String option;

    private Date createAt;

    private Date modifyAt;

    private Employee employee;

    private Category category;
    private String fuel;

    @QueryProjection
    @Builder
    public ResourceAdminDto(Category category, Employee employee){
        this.category = category;
        this.employee = employee;
    }


    @QueryProjection
    @Builder // 회의실 조회
    public ResourceAdminDto(Long resourceNo, Long cateNo, String able, String resourceName, String location, Integer people
                            , String availableTime, Long adminNo, String option, Date createAt, Date modifyAt){
        this.resourceNo = resourceNo;
        this.cateNo = cateNo;
        this.able = able;
        this.resourceName = resourceName;
        this.location = location;
        this.people = people;
        this.availableTime = availableTime;
        this.adminNo = adminNo;
        this.option = option;
        this.createAt = createAt;
        this.modifyAt = modifyAt;
    }
//    @QueryProjection
//    @Builder // 차량 조회
//    public ResourceAdminDto(Long resourceNo, Long cateNo, String able, String resourceName, Integer people
//            , String availableTime, Long adminNo, String option, String fuel,String createAt, String modifyAt){
//        this.resourceNo = resourceNo;
//        this.cateNo = cateNo;
//        this.able = able;
//        this.resourceName = resourceName;
//        this.people = people;
//        this.availableTime = availableTime;
//        this.adminNo = adminNo;
//        this.option = option;
//        this.fuel = fuel;
//        this.createAt = createAt;
//        this.modifyAt = modifyAt;
//    }
//
//    @QueryProjection
//    @Builder // 노트북 조회
//    public ResourceAdminDto(Long resourceNo, Long cateNo, String able, String resourceName, Integer people
//            , String availableTime, Long adminNo, String option, String createAt, String modifyAt){
//        this.resourceNo = resourceNo;
//        this.cateNo = cateNo;
//        this.able = able;
//        this.resourceName = resourceName;
//        this.people = people;
//        this.availableTime = availableTime;
//        this.adminNo = adminNo;
//        this.option = option;
//        this.createAt = createAt;
//        this.modifyAt = modifyAt;
//    }

}
