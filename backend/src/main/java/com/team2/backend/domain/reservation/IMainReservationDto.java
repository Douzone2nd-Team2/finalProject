package com.team2.backend.domain.reservation;

import java.util.Date;

public interface IMainReservationDto {
     Long getReservNo();
     Long getResourceNo();
     String getReservName();
     String getOption();
     String getResourceName();
     String getCateName();
     String getImageUrl();
     Date getStartTime();
     Date getEndTime();
     Integer getTimeCnt();
     Integer getResourceCnt();
     Long getImageNo();
     Integer getHour();
     Long getCnt();
     String getFuel();

}
