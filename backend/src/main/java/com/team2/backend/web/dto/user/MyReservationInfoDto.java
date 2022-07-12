package com.team2.backend.web.dto.user;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
@AllArgsConstructor
@NoArgsConstructor
public class MyReservationInfoDto {
    private Long reservNo;
    private String userName;
    private String reservName;
    private Date startTime;
    private Date endTime;
    private String resourceName;
    private String option;
    private String location;
    private String fuel;
    private String imageUrl;
    private String cateName;
    private Long cateNo;
}
