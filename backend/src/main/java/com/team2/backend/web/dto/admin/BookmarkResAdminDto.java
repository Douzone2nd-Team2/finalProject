package com.team2.backend.web.dto.admin;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookmarkResAdminDto{
    private Long bookmarkNo;
    private Long userNo;
    private Long resourceNo;


}
