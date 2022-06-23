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
    private String receiverName;
    private String message;
    private String date;
    private Status status;
    private Object data;
}
