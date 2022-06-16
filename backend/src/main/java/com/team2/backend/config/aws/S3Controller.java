package com.team2.backend.config.aws;

import com.team2.backend.web.dto.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RequiredArgsConstructor
@RestController
public class S3Controller {

    private final S3Uploader s3Uploader;

    @PostMapping("/main/image")
    public ResponseEntity<Message> updateUserImage(@RequestBody MultipartFile multipartFile){
        try{
            s3Uploader.uploadFiles(multipartFile, "static");
        }catch (Exception e){
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
