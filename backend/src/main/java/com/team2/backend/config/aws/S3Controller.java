package com.team2.backend.config.aws;

import com.team2.backend.web.dto.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class S3Controller {

    private final S3Uploader s3Uploader;

    @PostMapping("/main/image")
    @ResponseBody
    public ResponseEntity<Message> updateUserImage(@RequestPart(value = "image") MultipartFile multipartFile){

        try{
            String awsUrl = s3Uploader.uploadFiles(multipartFile, "static");
            System.out.println("aswUrl : "+awsUrl);
        }catch (Exception e){
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity(HttpStatus.OK);
    }
}
