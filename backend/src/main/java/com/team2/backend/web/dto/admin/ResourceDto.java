package com.team2.backend.web.dto.admin;

import com.querydsl.core.annotations.QueryProjection;
import com.sun.istack.NotNull;
import com.team2.backend.domain.resource.Category;
import com.team2.backend.domain.user.Employee;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;


@Getter
@NoArgsConstructor
public class ResourceDto {
    @NotNull
    private Long resourceNo;
    @NotNull
    private Long cateNo;
    private String able;
    private String resourceName;
    private String location;
    private Integer  people;
    private String availableTime;
    @NotNull
    private Long adminNo;
    private String option;
    private String fuel;
    private String cateName;


    @Builder // 회의실 등록
    public void ResourceDto(Category category, String resourceName, String location,
                            String availableTime, Integer people, Employee adminNo, String option,
                            String able){
        this.cateNo = category.getCateNo();
        this.resourceName = resourceName;
        this.location = location;
        this.availableTime = availableTime;
        this.able = able;
        this.people = people;
        this.adminNo = adminNo.getNo();
        this.option = option;
    }


    @Builder // 차량등록
    public ResourceDto(Category category, String resourceName, String location,
                       String availableTime, Integer people, Employee adminNo, String option,
                       String able, String fuel){
        this.cateNo = category.getCateNo();
        this.resourceName = resourceName;
        this.location = location;
        this.availableTime = availableTime;
        this.able = able;
        this.people = people;
        this.adminNo = adminNo.getNo();
        this.option = option;
        this.fuel = fuel;

    }

    @QueryProjection
    public ResourceDto(Long resourceNo, String resourceName, String cateName, Long cateNo){
        this.resourceNo = resourceNo;
        this.resourceName = resourceName;
        this.cateName = cateName;
        this.cateNo = cateNo;
    }
}
