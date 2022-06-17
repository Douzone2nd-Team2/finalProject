package com.team2.backend.web.dto.admin;

import com.team2.backend.domain.resource.Resource;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;


@Getter
@NoArgsConstructor
public class ResourceDto {
    private Long resourceNo;
    private Long category;
    private Character able;
    private String resourceName;
    private String location;
    private Integer  people;
    private String availableTime;
    private Long adminNo;
    private String option;
    private String fuel;



    @Builder // 회의실 등록
    public ResourceDto(Long category, String name, String location,
                       String availableTime, Integer people, Long adminNo, String option,
                       Character able){
        this.category = category;
        this.resourceName = name;
        this.location = location;
        this.availableTime = availableTime;
        this.able = able;
        this.people = people;
        this.adminNo = adminNo;
        this.option = option;
    }


    @Builder // 차량등록
    public ResourceDto(Long category, String name, String location,
                       String availableTime, Integer people, Long adminNo, String option,
                       Character able, String fuel){
        this.category = category;
        this.resourceName = name;
        this.location = location;
        this.availableTime = availableTime;
        this.able = able;
        this.people = people;
        this.adminNo = adminNo;
        this.option = option;
        this.fuel = fuel;

    }
//    public Resource toEntity(){
//        return Resource.builder()
//                .category(category)
//                .able(able)
//                .resourceName(resourceName)
//                .location(location)
//                .availableTime(availableTime)
//                .people(people)
//                .adminNo(adminNo)
//                .option(option)
//                .build();
//    }


}
