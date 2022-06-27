package com.team2.backend.web.dto.admin;

import com.team2.backend.domain.resource.Resource;
import com.team2.backend.domain.resource.Resourcefile;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResourcefileDto {
    private String able;
    private Integer resourceNo;
    private String path;
    private LocalDateTime createAt;
    private LocalDateTime modifyAt;


}
