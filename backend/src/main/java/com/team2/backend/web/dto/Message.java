package com.team2.backend.web.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class Message {

    private Integer resCode;
    @JsonInclude(JsonInclude.Include.NON_NULL) // Null 값인 필드 제외
    private String message;
    @JsonInclude(JsonInclude.Include.NON_NULL) // Null 값인 필드 제외
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

    public static Message of(Object object,String msg){
        return Message.builder()
                .resCode(3000)
                .message(msg)
                .data(object)
                .build();
    }

}
