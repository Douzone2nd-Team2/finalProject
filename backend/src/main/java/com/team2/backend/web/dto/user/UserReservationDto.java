package com.team2.backend.web.dto.user;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.team2.backend.domain.reservation.Reservation;
import com.team2.backend.domain.resource.PeopleCnt;
import com.team2.backend.domain.resource.Resource;
import com.team2.backend.domain.user.Employee;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Getter
@NoArgsConstructor
public class UserReservationDto {

    private Long reservNo;

    private String able;
    private Long resourceNo;
    private Long userNo;
    private String reservName;
    private String startTime;
    private String endTime;

    private Date startDate;
    private Date endDate;
    private List<String> peopleCnt;

    @Builder
    public  UserReservationDto(Long reservNo, Long resourceNo, Long userNo, String reservName, String startTime, String endTime, String[] peopleCnt) {
        this.reservNo = reservNo;
        this.resourceNo = resourceNo;
        this.userNo = userNo;
        this.reservName = reservName;
        this.startTime = startTime;
        this.endTime = endTime;

        for (int i = 0; i < peopleCnt.length; i++) {
            this.peopleCnt.add(peopleCnt[i]);
        }
    }

    @Builder
    public  UserReservationDto(Long reservNo, Long resourceNo, Long userNo, String reservName, String startTime, String endTime) {
        this.reservNo = reservNo;
        this.resourceNo = resourceNo;
        this.userNo = userNo;
        this.reservName = reservName;
        this.startTime = startTime;
        this.endTime = endTime;
    }

}
