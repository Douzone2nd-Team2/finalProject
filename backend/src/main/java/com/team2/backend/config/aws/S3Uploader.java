package com.team2.backend.config.aws;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@Component
@RequiredArgsConstructor
public class S3Uploader {

    private final AmazonS3Client amazonS3Client;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    public String[] uploadFiles(MultipartFile multipartFile, String dirName) throws IOException{

        return upload(multipartFile, dirName);
    }


    public String[] upload( MultipartFile multipartFile, String dirName){

        String fileUrl = dirName +"/"+ LocalDateTime.now()+"_"+multipartFile.getOriginalFilename(); // S3에 저장된 파일 이름
        String[] uploadImageUrl = putS3(multipartFile, fileUrl); //s3 upload
        return uploadImageUrl;
    }

    //s3 upload
    public String[] putS3(MultipartFile multipartFile, String fileName){
        try {
            String contentType = multipartFile.getContentType();
            long contentLength = multipartFile.getSize();

            InputStream is = multipartFile.getInputStream();

            ObjectMetadata objectMetadata = new ObjectMetadata();
            objectMetadata.setContentType(contentType);
            objectMetadata.setContentLength(contentLength);

            amazonS3Client.putObject(new PutObjectRequest(this.bucket, fileName, is, objectMetadata));

        }catch (AmazonS3Exception e){
            e.getMessage();
            e.printStackTrace();
        }catch (Exception e){
            e.printStackTrace();
        }
        String[] str = new String[2];
        str[0] = amazonS3Client.getUrl(bucket, fileName).toString();
        str[1] = fileName;
        return str;
    }


    public void remove(String fileName) {
        try {
            //Delete 객체 생성
            DeleteObjectRequest deleteObjectRequest = new DeleteObjectRequest(bucket, fileName);
            //Delete
            amazonS3Client.deleteObject(deleteObjectRequest);
            System.out.println(String.format("[%s] deletion complete", fileName));

        } catch (AmazonServiceException e) {
            e.printStackTrace();
        } catch (SdkClientException e) {
            e.printStackTrace();
        }
    }

}
