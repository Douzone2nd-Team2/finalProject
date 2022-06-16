package com.team2.backend.web.dto.AdminDto;

import com.team2.backend.domain.resource.Resource;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@NoArgsConstructor
public class ResourceDto {
    private Long resourceNo;
    private Long category;
    private Character able;
    private String name;
    private String location;
    private Integer  people;
    private String availableTime;
    private String adminNo;
    private String option;



    @Builder // insert
    public ResourceDto(Long category, String name, String location,
                       String availableTime, Integer people, String adminNo, String option, Character able){
        this.category = category;
        this.name = name;
        this.location = location;
        this.availableTime = availableTime;
        this.able = able;
        this.people = people;
        this.adminNo = adminNo;
        this.option = option;
    }

    public Resource toEntity(){
        return Resource.builder()
                .category(category)
                .able(able)
                .name(name)
                .location(location)
                .availableTime(availableTime)
                .people(people)
                .adminNo(adminNo)
                .option(option)
                .build();
    }


}
