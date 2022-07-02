package com.team2.backend.config.aws;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.team2.backend.web.dto.JsonResponse;
import com.team2.backend.web.dto.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
public class S3Controller {

    private final S3Uploader s3Uploader;

    @PostMapping("/main/imageInsert")
    @ResponseBody
    public ResponseEntity<Message> insertUserImage(@RequestPart(value = "image") MultipartFile multipartFile) {
        System.out.println("imageInsert enter!");
        try {
            String awsUrl = s3Uploader.uploadFiles(multipartFile, "static");
            System.out.println("aswUrl : " + awsUrl);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity(HttpStatus.OK);
    }

//    @RequestPart(value = "image") MultipartFile multipartFile,
    @PostMapping("/main/imageUpdate")
    @ResponseBody
    public ResponseEntity<Message> UpdateUserImage(
                                                   HttpServletRequest req, @RequestBody Map<String, String> map) {
        System.out.println("updateimage enter!!!");
        Long userNo = (Long) req.getAttribute("userNo");
        System.out.println("userNo : " + userNo);

        String fileName = map.get("fileName");
        try {
            s3Uploader.remove(fileName);
        }catch (AmazonServiceException e) {
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }catch (SdkClientException e){
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity(HttpStatus.OK);
        //userNo 사용해서 해당 이미지 url 가지고 와서 s3에서 파일 삭제하고, 새로운 파일 업로드하고 table에 저장




    }

}
