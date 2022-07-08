package com.team2.backend.web.dto.user;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SearchPeopleDto {
    private String keyword;
}
