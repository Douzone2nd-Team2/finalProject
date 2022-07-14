package com.team2.backend.web.dto.admin;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.time.LocalDateTime;
@JsonInclude(JsonInclude.Include.NON_NULL)
public interface

IResourceAdminDto { // office
    Long getResourceNo();
    Long getCateNo();
    String getCateName();
    String getAble();
    String getResourceName();
    String getLocation();
    String getFuel();
    Integer getPeople();
    String getAvailableTime();
    Long getAdminNo();
    String getOption();

    String getPath();

    String getContent();
    LocalDateTime getCreateAt();
    LocalDateTime getModifyAt();

    String getImageUrl();
}
