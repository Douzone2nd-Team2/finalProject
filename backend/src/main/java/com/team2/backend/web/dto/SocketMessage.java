package com.team2.backend.web.dto;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class SocketMessage {

    private String sender;
    private String receiver;
    private String action;
    private Object data;

    @Builder
    public SocketMessage(String sender, String action) {
        this.sender = sender;
        this.action = action;
    }

}
