package com.team2.backend.domain.reservation;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MainReservationDto implements IMainReservationDto{

    private Long reservNo;
    private Long resourceNo;
    private String reservName;
    private String option;
    private String resourceName;
    private String cateName;
    private String imageUrl;
    private Date startTime;
    private Date endTime;
    private Long imageNo;

    private Integer timeCnt;
    private Integer resourceCnt;

    private Integer hour;
    private Long cnt;
}
