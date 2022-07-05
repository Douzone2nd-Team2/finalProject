package com.team2.backend.service.admin;

import com.team2.backend.config.aws.S3Uploader;
import com.team2.backend.domain.bookmark.BookmarkRepository;
import com.team2.backend.domain.bookmark.reservation.ReservationQuerydslRepository;
import com.team2.backend.domain.resource.Resource;
import com.team2.backend.domain.resource.ResourceRepository;
import com.team2.backend.domain.resource.Resourcefile;
import com.team2.backend.domain.resource.ResourcefileRepository;
import com.team2.backend.web.dto.JsonResponse;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.admin.BookmarkResAdminDto;
import com.team2.backend.web.dto.admin.IResourceAdminDto;
import com.team2.backend.web.dto.admin.ReservationManagementDto;
import com.team2.backend.web.dto.admin.ResourceAdminDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
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
    public ResponseEntity<Message> getBookmark() {
        List<BookmarkResAdminDto> bookmarkList = bookmarkRepository.findAll().stream().map(bookmark -> {
            return BookmarkResAdminDto.builder().bookmarkNo(bookmark.getBookmarkNo()).resourceNo(bookmark.getResourceNo()).userNo(bookmark.getUserNo()).build();
        }).collect(Collectors.toList());
        String msg = "";

        if (bookmarkList == null) {
            msg = "실패 : 북마크 조회 실패";
            return new JsonResponse().send(400, Message.of(bookmarkList, msg));
        }
        msg = "성공 : 북마크 조회 성공";
        return new JsonResponse().send(200, Message.of(bookmarkList, msg));
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
    public ResponseEntity<Message> fileupload(String able, String resourceNo, List<MultipartFile> multipartFile) {
        try {
            List<Resourcefile> resourcefileList = new ArrayList<>();

            for (int i = 0; i < multipartFile.size(); i++) {
                String awsUrl = s3Uploader.uploadFiles(multipartFile.get(i), "static");
                System.out.println(i + 1 + " : " + awsUrl);

                Resourcefile file = resourcefileRepository.save(
                        Resourcefile.builder()
                                .able(able)
                                .resourceNo(Long.valueOf(resourceNo))
                                .type(multipartFile.get(i).getContentType())
                                .imageSize(String.valueOf(multipartFile.get(i).getSize()))
                                .path(awsUrl)
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
    public ResponseEntity<Message> resourceUpdate(HttpServletRequest req, Long resourceNo, Resource resource) {

        Resource updateResource = resourceRepository.findByResourceNo(resourceNo);

        if (updateResource != null) {
            updateResource.update(resource.getCateNo(), resource.getAble(), resource.getResourceName(), resource.getLocation(), resource.getPeople(),
                    resource.getAvailableTime(), resource.getAdminNo(), resource.getOption(), resource.getFuel());
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
        return new JsonResponse().send(400, message);
    }
}
