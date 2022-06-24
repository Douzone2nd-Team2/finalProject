package com.team2.backend.web.dto.admin;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.querydsl.core.annotations.QueryProjection;
import com.team2.backend.domain.reservation.Reservation;
import com.team2.backend.domain.resource.PeopleCnt;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
@NoArgsConstructor
public class ReservationManagementDto {

    //예약
    private Long reservNo;
    private String able;
    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private Date startTime;
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private Date endTime;
    private String reservName;
    private Long resourceNo;
    private Long userNo;
    private LocalDateTime reservCreateAt;
    private LocalDateTime reservModifyAt;

    //자원
    private Long cateNo;
    private String cateName;
    private String category;
    private String resourceName;
    private String location;
    private Integer people;
    private String availableTime;
    private Long adminNo;
    private String option;
    private String fuel;
    private LocalDateTime resourceCreateAt;
    private LocalDateTime resourceModifyAt;

    //자원 이미지
    private Long imageNo;
    private String imageUrl;

    //직원
    private String empNo;
    private String name;

    //회의실 예약 인원
    private Long peopleNo;
    private List<String> empNoList;   //직원고유번호, 사원번호

    @QueryProjection
    @Builder
    public ReservationManagementDto(Long reservNo, String able, Date startTime, Date endTime, String reservName, String resourceName, LocalDateTime reservCreateAt, LocalDateTime reservModifyAt, String category) {
        this.reservNo = reservNo;
        this.able = able;
        this.startTime = startTime;
        this.endTime = endTime;
        this.reservName = reservName;
        this.resourceName = resourceName;
        this.reservCreateAt = reservCreateAt;
        this.reservModifyAt = reservModifyAt;
        this.category = category;
    }

    public Reservation toEntity() throws ParseException {
        return Reservation.builder()
                .able(able)
                .reservName(reservName)
                .resourceNo(resourceNo)
                .userNo(userNo)
                .startTime(startTime)
                .endTime(endTime)
                .build();
    }
}
