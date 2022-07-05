package com.team2.backend.web.dto.admin;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.sun.istack.NotNull;
import com.team2.backend.domain.resource.Resource;
import com.team2.backend.domain.resource.Resourcefile;
import com.team2.backend.domain.user.Employee;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResourceAdminDto implements IResourceAdminDto{
    @NotNull
    private Long resourceNo;
    private Long cateNo;
    private String cateName;
    private String able;
    private String resourceName;
    private Integer people;
    private String availableTime;
    @NotNull
    private Long adminNo;
    private String option;
    private LocalDateTime createAt;
    private LocalDateTime modifyAt;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String location;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String fuel;

    private String content;

    private List<Resourcefile> resourcefile;

    @Builder
    public ResourceAdminDto(Long resourceNo, Long cateNo, String able, String resourceName,List<Resourcefile> resourcefile){
        this.resourceNo = resourceNo;
        this.cateNo = cateNo;
        this.able = able;
        this.resourceName = resourceName;
        this.resourcefile = resourcefile;
    }

}

