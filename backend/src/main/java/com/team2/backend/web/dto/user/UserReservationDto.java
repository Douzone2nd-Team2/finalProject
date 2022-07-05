package com.team2.backend.web.dto.user;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Getter
@NoArgsConstructor
public class UserReservationDto {

    private String able;
    private Long resourceNo;
    private Long userNo;
    private String reservName;
    private Date startTime;
    private Date endTime;
    private List<String> peopleCnt;

    @Builder
    public  UserReservationDto(Long resourceNo, Long userNo, String reservName, Date startTime, Date endTime, String[] peopleCnt) {
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
    public  UserReservationDto(Long resourceNo, Long userNo, String reservName, Date startTime, Date endTime) {
        this.resourceNo = resourceNo;
        this.userNo = userNo;
        this.reservName = reservName;
        this.startTime = startTime;
        this.endTime = endTime;
    }

}
