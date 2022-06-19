package com.team2.backend.web.dto;

import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class HttpResponse {

    private static ObjectMapper om = new ObjectMapper();

    public static void sendMessage(HttpServletResponse response, Message message) throws IOException {
        String messageToJson = om.writeValueAsString(message);
        response.getWriter().write(messageToJson);
    }
}
