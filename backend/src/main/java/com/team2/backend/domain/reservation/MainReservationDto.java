package com.team2.backend.domain.reservation;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Getter
@AllArgsConstructor
@NoArgsConstructor
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

}
