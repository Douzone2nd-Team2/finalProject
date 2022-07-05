package com.team2.backend.web.dto;

import com.team2.backend.web.dto.user.Status;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SocketMessage {
    private String senderName;
    private Integer resCode;
    private String message;
    private Object data;
}
