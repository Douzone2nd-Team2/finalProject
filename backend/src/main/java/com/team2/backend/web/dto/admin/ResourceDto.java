package com.team2.backend.web.dto.admin;

import com.sun.istack.NotNull;
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
    private Long category;
    private Character able;
    private String resourceName;
    private String location;
    private Integer  people;
    private String availableTime;
    @NotNull
    private Long adminNo;
    private String option;
    private String fuel;


    @Builder // 회의실 등록
    public void ResourceDto(Long category, String resourceName, String location,
                          String availableTime, Integer people, Long adminNo, String option,
                          Character able){
        this.category = category;
        this.resourceName = resourceName;
        this.location = location;
        this.availableTime = availableTime;
        this.able = able;
        this.people = people;
        this.adminNo = adminNo;
        this.option = option;
    }


    @Builder // 차량등록
    public ResourceDto(Long category, String resourceName, String location,
                       String availableTime, Integer people, Long adminNo, String option,
                       Character able, String fuel){
        this.category = category;
        this.resourceName = resourceName;
        this.location = location;
        this.availableTime = availableTime;
        this.able = able;
        this.people = people;
        this.adminNo = adminNo;
        this.option = option;
        this.fuel = fuel;

    }
}
