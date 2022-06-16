package com.team2.backend.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class Message {

    private Integer resCode;
    private String message;
    private Object data;

    @Builder
    public Message(Integer resCode, String message, Object data) {
        this.resCode = resCode;
        this.message = message;
        this.data = data;
    }

    @Builder
    public Message(Integer resCode, Object data) {
        this.resCode = resCode;
        this.data = data;
    }

    @Builder
    public Message(Object data) {
        this.data = data;
    }

}
