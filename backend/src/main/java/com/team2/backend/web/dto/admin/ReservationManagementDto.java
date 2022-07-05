package com.team2.backend.web.dto.admin;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.querydsl.core.annotations.QueryProjection;
import com.querydsl.core.types.Expression;
import com.team2.backend.domain.reservation.Reservation;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.text.ParseException;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

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
    private String userName;
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
    private String adminName;
    private String option;
    private String fuel;
    private LocalDateTime resourceCreateAt;
    private LocalDateTime resourceModifyAt;

    //자원 이미지
    private Long imageNo;
    private String imageUrl;
    private Expression imagePath;

    //직원
    private String empNo;
    private String name;

    //회의실 예약 인원
    private Long peopleNo;
    private List<String> empNoList;   //직원고유번호, 사원번호

    //timelist
    private Long checkNo;
    private String checkDate;
    private Long timeNo;

    private Integer hour;
    private Long cnt;

    @QueryProjection
    @Builder
    public ReservationManagementDto(Long reservNo, String able, Date startTime, Date endTime, String reservName, Long resourceNo, String resourceName, LocalDateTime reservCreateAt, LocalDateTime reservModifyAt, String category) {
        this.reservNo = reservNo;
        this.able = able;
        this.startTime = startTime;
        this.endTime = endTime;
        this.resourceNo = resourceNo;
        this.reservName = reservName;
        this.resourceName = resourceName;
        this.reservCreateAt = reservCreateAt;
        this.reservModifyAt = reservModifyAt;
        this.category = category;
    }

    @QueryProjection
    @Builder
    public ReservationManagementDto(Long reservNo, String able, String cateName, Long cateNo, String resourceName, Long resourceNo,
                                    Long userNo, String userName, Date startTime, Date endTime, Long adminNo,
                                    String availableTime, String adminName){
        this.reservNo = reservNo;
        this.able = able;
        this.category = cateName;
        this.cateNo = cateNo;
        this.resourceName = resourceName;
        this.resourceNo = resourceNo;
        this.userNo = userNo;
        this.userName = userName;
        this.startTime = startTime;
        this.endTime = endTime;
        this.adminNo = adminNo;
        this.adminName = adminName;
        this.availableTime = availableTime;
    }

    @QueryProjection
    @Builder
    public ReservationManagementDto(Long checkNo, Long resourceNo, String checkDate, Long cateNo, Long reservNo, Long timeNo) {
        this.checkNo = checkNo;
        this.resourceNo = resourceNo;
        this.checkDate = checkDate;
        this.reservNo = reservNo;
        this.cateNo = cateNo;
        this.timeNo = timeNo;
    }

    //사용자
    @QueryProjection
    @Builder
    public ReservationManagementDto(Long reservNo, Long resourceNo, String reservName, Expression imagePath) {
        this.reservNo = reservNo;
        this.resourceNo = resourceNo;
        this.reservName = reservName;
        this.imagePath = imagePath;
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
