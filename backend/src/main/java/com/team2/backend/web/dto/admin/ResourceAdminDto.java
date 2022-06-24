package com.team2.backend.web.dto.admin;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.team2.backend.domain.resource.Resource;
import com.team2.backend.domain.user.Employee;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class ResourceAdminDto implements IResourceAdminDto{
    private Long resourceNo;
    private Long cateNo;
    private String cateName;
    private String able;
    private String resourceName;
    private Integer people;
    private String availableTime;
    private Long adminNo;
    private String option;
    private LocalDateTime createAt;
    private LocalDateTime modifyAt;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String location;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String fuel;

    public Resource toEntity(){
        return Resource.builder()
                .resourceNo(resourceNo)
                .resourceName(resourceName)
                .location(location)
                .cateNo(cateNo)
                .availableTime(availableTime)
                .fuel(fuel)
                .option(option)
                .adminNo(adminNo)
                .people(people)
                .able(able)
                .build();
    }
}

