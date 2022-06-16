package com.team2.backend.web.dto.user;

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

    private char able;
    private Long resourceNo;
    private String empNo;
    private String reservName;
    private Date startTime;
    private Date endTime;
    private List<String> peopleCnt;

    @Builder
    public  UserReservationDto(Long resourceNo, String empNo, String reservName, Date startTime, Date endTime, String[] peopleCnt) {
        this.resourceNo = resourceNo;
        this.empNo = empNo;
        this.reservName = reservName;
        this.startTime = startTime;
        this.endTime = endTime;

        for (int i = 0; i < peopleCnt.length; i++) {
            this.peopleCnt.add(peopleCnt[i]);
        }
    }

    @Builder
    public  UserReservationDto(Long resourceNo, String empNo, String reservName, Date startTime, Date endTime) {
        this.resourceNo = resourceNo;
        this.empNo = empNo;
        this.reservName = reservName;
        this.startTime = startTime;
        this.endTime = endTime;
    }

}
