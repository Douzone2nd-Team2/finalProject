package com.team2.backend.config.aws;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Component
@RequiredArgsConstructor
public class S3Uploader {

    private final AmazonS3Client amazonS3Client;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    public String uploadFiles(MultipartFile multipartFile, String dirName) throws IOException{

        String fileName = multipartFile.getName();

        File file = new File(multipartFile.getOriginalFilename());
        multipartFile.transferTo(file);

        return upload(file, dirName);
    }


    public String upload(File uploadFile, String filePath){
        System.out.println("upload enter@@@@");
        System.out.println("filePath: "+filePath);

        String fileName = filePath +"/"+ LocalDateTime.now()+"_"+uploadFile.getName(); // S3에 저장된 파일 이름
        String uploadImageUrl = putS3(uploadFile, fileName); //s3 upload
        System.out.println(uploadFile);
        return uploadImageUrl;
    }

    //s3 upload
    public String putS3(File uploadFile, String fileName){
        System.out.println("putS3 enter@@@@@");
        System.out.println(uploadFile+"//"+fileName+"//"+bucket);
        amazonS3Client.putObject(new PutObjectRequest(bucket, fileName, uploadFile));

        System.out.println(amazonS3Client.getUrl(bucket, fileName).toString());
        return amazonS3Client.getUrl(bucket, fileName).toString();
    }

}
