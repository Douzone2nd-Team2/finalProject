package com.team2.backend.web.dto;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import java.nio.charset.Charset;

public class JsonResponse {

    private HttpHeaders headers = new HttpHeaders();
    public ResponseEntity<Message> send(HttpStatus status, Message message) {
        headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
        return new ResponseEntity<>(message, headers, status);
    }

    public ResponseEntity<Message> send(int status, Message message) {
        headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
        return new ResponseEntity<>(message, headers, status);
    }

    public ResponseEntity<Message> send(HttpStatus status) {
        headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
        return new ResponseEntity<>(status);
    }
}
