package com.team2.backend.service.admin;

import com.team2.backend.config.aws.S3Uploader;
import com.team2.backend.domain.bookmark.BookmarkRepository;
import com.team2.backend.domain.reservation.ReservationQuerydslRepository;
import com.team2.backend.domain.resource.Resource;
import com.team2.backend.domain.resource.ResourceRepository;
import com.team2.backend.domain.resource.Resourcefile;
import com.team2.backend.domain.resource.ResourcefileRepository;
import com.team2.backend.web.dto.JsonResponse;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.admin.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ResourceService {
    private final ResourceRepository resourceRepository;

    private final BookmarkRepository bookmarkRepository;
    private final ReservationQuerydslRepository reservationQuerydslRepository;
    private final ResourcefileRepository resourcefileRepository;
    private final S3Uploader s3Uploader;

    @Transactional
    public ResponseEntity<Message> getResourceList() {
        List<IResourceAdminDto> AllresourceList = resourceRepository.findAllResource();
        if (AllresourceList.isEmpty()) {
            Message message = Message.builder()
                    .resCode(3001)
                    .message("실패: 전체조회 실패")
                    .build();
            return new JsonResponse().send(400, message);

        }

        Message message = Message.builder()
                .resCode(3000)
                .message("성공: 전체조회 잘됨")
                .data(AllresourceList)
                .build();
        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> getEachList(Long cateNo) {
        List<IResourceAdminDto> officeList = resourceRepository.findByCateNo(cateNo);

        if (officeList.isEmpty()) {
            Message message = Message.builder()
                    .resCode(3001)
                    .message("실패: 각 자원 조회 실패")
                    .build();
            return new JsonResponse().send(400, message);
        }

        Message message = Message.builder()
                .resCode(3000)
                .message("성공: 각 자원 조회 성공")
                .data(officeList)
                .build();
        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> getResourceNoList(Long resourceNo) {
        Resource resource = resourceRepository.findByResourceNo(resourceNo);
        List<Resourcefile> fileList = resourcefileRepository.findByResource_ResourceNo(resourceNo);

        HashMap<String,Object> data = new HashMap<>();
        data.put("fileList", fileList);
        data.put("resource", resource);

        if(resource == null) {
            Message message = Message.builder()
                    .resCode(3001)
                    .message("실패: resourceNo에 따른 자원 실패")
                    .build();
            return new JsonResponse().send(400, message);

        }
        Message message = Message.builder()
                .resCode(3000)
                .message("성공: resourceNo에 따른 자원 성공")
                .data(data)
                .build();
        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> getBookmark() {
        List<IResourceAdminDto> bookmarkList = bookmarkRepository.findBookmark();
        if (bookmarkList.isEmpty()) {
            Message message = Message.builder()
                    .resCode(3001)
                    .message("실패: 북마크조회 실패")
                    .build();
            return new JsonResponse().send(400, message);

        }

        Message message = Message.builder()
                .resCode(3000)
                .message("성공: 북마크 잘됨")
                .data(bookmarkList)
                .build();
        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> resourceRegister(ResourceAdminDto resourceAdminDto) {
        if (resourceAdminDto.getCateNo() == 1) {
            Resource office = resourceRepository.save(
                    Resource.builder()
                            .cateNo(resourceAdminDto.getCateNo())
                            .location(resourceAdminDto.getLocation())
                            .availableTime(resourceAdminDto.getAvailableTime())
                            .resourceName(resourceAdminDto.getResourceName())
                            .able(resourceAdminDto.getAble())
                            .people(resourceAdminDto.getPeople())
                            .adminNo(resourceAdminDto.getAdminNo())
                            .option(resourceAdminDto.getOption())
                            .content(resourceAdminDto.getContent())
                            .build()
            );

            Message message = Message.builder()
                    .resCode(3000)
                    .message("성공: 회의실 등록")
                    .data(office)
                    .build();
            return new JsonResponse().send(200, message);

        } else if (resourceAdminDto.getCateNo() == 2) {
            Resource car = resourceRepository.save(
                    Resource.builder()
                            .cateNo(resourceAdminDto.getCateNo())
                            .availableTime(resourceAdminDto.getAvailableTime())
                            .resourceName(resourceAdminDto.getResourceName())
                            .able(resourceAdminDto.getAble())
                            .people(resourceAdminDto.getPeople())
                            .adminNo(resourceAdminDto.getAdminNo())
                            .option(resourceAdminDto.getOption())
                            .fuel(resourceAdminDto.getFuel())
                            .content(resourceAdminDto.getContent())
                            .build()

            );

            Message message = Message.builder()
                    .resCode(3000)
                    .message("성공: 차량 등록")
                    .data(car)
                    .build();
            return new JsonResponse().send(200, message);

        } else if (resourceAdminDto.getCateNo() == 3) {
            Resource laptop = resourceRepository.save(
                    Resource.builder()
                            .resourceNo(resourceAdminDto.getResourceNo())
                            .cateNo(resourceAdminDto.getCateNo())
                            .resourceName(resourceAdminDto.getResourceName())
                            .availableTime(resourceAdminDto.getAvailableTime())
                            .able(resourceAdminDto.getAble())
                            .people(resourceAdminDto.getPeople())
                            .adminNo(resourceAdminDto.getAdminNo())
                            .option(resourceAdminDto.getOption())
                            .content(resourceAdminDto.getContent())
                            .build()

            );

            Message message = Message.builder()
                    .resCode(3000)
                    .message("성공: 노트북 등록")
                    .data(laptop)
                    .build();
            return new JsonResponse().send(200, message);

        }

        Message message = Message.builder()
                .resCode(3001)
                .message("실패: 자원 등록 실패")
                .build();
        return new JsonResponse().send(400, message);
    }

    @Transactional
    public ResponseEntity<Message> fileupload(List<MultipartFile> multipartFile) {
        try {

            Resource resource = new Resource();

            Long resourceNo = resourceRepository.findLastReserouce();
            List<Resourcefile> resourcefileList = new ArrayList<>();

            if(multipartFile != null) {
                for (int i = 0; i < multipartFile.size(); i++) {
                    String[] awsUrl = s3Uploader.uploadFiles(multipartFile.get(i), "static");

                    Resourcefile file = resourcefileRepository.save(
                            Resourcefile.builder()
                                    .able(resource.getAble())
                                    .resourceNo(resourceNo)
                                    .type(multipartFile.get(i).getContentType())
                                    .imageSize(String.valueOf(multipartFile.get(i).getSize()))
                                    .path(awsUrl[0])
                                    .imageName(awsUrl[1])
                                    .build()
                    );
                    resourcefileList.add(file);
                }
            }
            Message message = Message.builder()
                    .resCode(3000)
                    .message("성공: 자원 파일 등록 성공")
                    .data(resourcefileList)
                    .build();
            return new JsonResponse().send(200, message);

        } catch (Exception e) {
            e.printStackTrace();
        }
        Message message = Message.builder()
                .resCode(3001)
                .message("실패: 자원 파일 등록 실패")

                .build();
        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> resourceUpdate(HttpServletRequest req, Long resourceNo, Resource resource) {
        Resource updateResource = resourceRepository.findByResourceNo(resourceNo);

        if (updateResource != null) {
            updateResource.update(resource.getCateNo(), resource.getAble(), resource.getResourceName(), resource.getLocation(), resource.getPeople(),
                    resource.getAvailableTime(), resource.getAdminNo(), resource.getOption(), resource.getFuel(), resource.getContent());


            Message message = Message.builder()
                    .resCode(3000)
                    .message("성공: 자원 수정 성공")
                    .data(updateResource)
                    .build();
            return new JsonResponse().send(200, message);
        }
        Message message = Message.builder()
                .resCode(3001)
                .message("실패: 자원수정 실패")
                .build();

        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> fileUpdate(List<MultipartFile> multipartFile, Long resourceNo) {
        try {
            List<Resourcefile> resourcefileList = new ArrayList<>();

            //resourcefile에서 resourceno 가진거 delete 동시에 s3에서 delete
            //        -> insert 같은 resourceno로 넣고 s3 insert


            Resource resource = new Resource();

           //Long resourceNo = resourceRepository.findLastReserouce();

            //delelte
            List<Resourcefile> delresourcefile = resourcefileRepository.findByResource_ResourceNo(resourceNo);

            if (resourceNo != null && delresourcefile != null) {
                List<Long> delIdList = resourcefileRepository.findByResource_ResourceNo(resourceNo).stream()
                        .map(resourcefile -> {
                            return resourcefile.getImageNo();
                        }).collect(Collectors.toList());

                delIdList.stream().map(
                        id -> {
                            String imageName = resourcefileRepository.findByImageNo(id).getImageName();
                            s3Uploader.remove(imageName);
                            resourcefileRepository.deleteById(id);
                            return id;
                        }
                ).collect(Collectors.toList());
            }

            //insert
            for (int i = 0; i < multipartFile.size(); i++) {
                String[] awsUrl = s3Uploader.uploadFiles(multipartFile.get(i), "static");

                Resourcefile file = resourcefileRepository.save(
                        Resourcefile.builder()
                                .able(resource.getAble())
                                .resourceNo(resourceNo)
                                .type(multipartFile.get(i).getContentType())
                                .imageSize(String.valueOf(multipartFile.get(i).getSize()))
                                .path(awsUrl[0])
                                .imageName(awsUrl[1])
                                .build()
                );
                resourcefileList.add(file);
            }
            Message message = Message.builder()
                    .resCode(3000)
                    .message("성공: 자원 파일 등록 성공")
                    .data(resourcefileList)
                    .build();
            return new JsonResponse().send(200, message);

        } catch (Exception e) {
            e.printStackTrace();
        }
        Message message = Message.builder()
                .resCode(3001)
                .message("실패: 자원 파일 등록 실패")

                .build();
        return new JsonResponse().send(200, message);
    }



    @Transactional
    public ResponseEntity<Message> delresourceList(Long resourceNo) {
        Resource delresourse = resourceRepository.findByResourceNo(resourceNo);
        List<Resourcefile> delresourcefile = resourcefileRepository.findByResource_ResourceNo(resourceNo);

        if (delresourse != null && delresourcefile != null) {
            List<Long> delIdList = resourcefileRepository.findByResource_ResourceNo(resourceNo).stream()
                    .map(resourcefile -> {
                        return resourcefile.getImageNo();
                    }).collect(Collectors.toList());


            delIdList.stream().map(
                    id -> {
                        String imageName = resourcefileRepository.findByImageNo(id).getImageName();
                        s3Uploader.remove(imageName);
                        resourcefileRepository.deleteById(id);
                        return id;
                    }
            ).collect(Collectors.toList());

            resourceRepository.deleteById(resourceNo);

            Message message = Message.builder()
                    .resCode(3000)
                    .message("성공: 해당 자원 삭제")
                    .build();
            return new JsonResponse().send(200, message);
        }
        Message message = Message.builder()
                .resCode(3001)
                .message("실패: 해당 자원 없음")
                .build();
        return new JsonResponse().send(400, message);
    }

    @Transactional
    public ResponseEntity<Message> resourceBookingList(HttpServletRequest request, Long resourceNo) throws ParseException {

        List<ReservationManagementDto> presentReservList = reservationQuerydslRepository.getReservList(resourceNo, "Present", "resource");
        List<ReservationManagementDto> pastReservList = reservationQuerydslRepository.getReservList(resourceNo, "Past", "resource");

        Map<String, List<ReservationManagementDto>> list = new HashMap<>();
        list.put("presentReservList", presentReservList);
        list.put("pastReservList", pastReservList);

        Message message = Message.builder()
                .resCode(1000)
                .message("[Success] : Select resourceBookingList")
                .data(list)
                .build();
        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> searchResource(String keyword){
        Message message;
        try {
            List<ResourceDto> resourceList = reservationQuerydslRepository.getSearchResourceList(keyword);

            message = Message.builder()
                    .resCode(1000)
                    .message("[Success] : Select resourceSearchList")
                    .data(resourceList)
                    .build();
            return new JsonResponse().send(200, message);

        }catch (Exception e){
            e.printStackTrace();
            message = Message.builder()
                    .resCode(1001)
                    .message("[Fail] : Select resourceSearchList")
                    .build();
            return new JsonResponse().send(400, message);
        }

    }
}
