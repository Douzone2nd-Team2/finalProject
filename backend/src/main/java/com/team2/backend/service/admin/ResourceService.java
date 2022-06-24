package com.team2.backend.service.admin;

import com.team2.backend.domain.bookmark.BookmarkRepository;
import com.team2.backend.domain.reservation.ReservationQuerydslRepository;
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
import com.team2.backend.web.dto.admin.ResourcefileDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static com.team2.backend.domain.resource.QResourcefile.resourcefile;

@RequiredArgsConstructor
@Service
public class ResourceService {
    private final ResourceRepository resourceRepository;

    private final BookmarkRepository bookmarkRepository;
    private final ReservationQuerydslRepository reservationQuerydslRepository;
    private final ResourcefileRepository resourcefileRepository;

    @Transactional
    public ResponseEntity<Message> getResourceList(){
        List<IResourceAdminDto> AllresourceList = resourceRepository.findAllResource();

        if(AllresourceList.isEmpty()){
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
    public ResponseEntity<Message> getEachList(Long cateNo){
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
    public ResponseEntity<Message> getBookmark(){
        List<BookmarkResAdminDto> bookmarkList = bookmarkRepository.findAll().stream().map(bookmark->{
            return BookmarkResAdminDto.builder().bookmarkNo(bookmark.getBookmarkNo()).resourceNo(bookmark.getResourceNo()).userNo(bookmark.getUserNo()).build();
        }).collect(Collectors.toList());
        String msg ="";

        if (bookmarkList == null) {
             msg="실패 : 북마크 조회 실패";
            return new JsonResponse().send(400, Message.of(bookmarkList ,msg));
        }
        msg="성공 : 북마크 조회 성공";
        return new JsonResponse().send(200, Message.of(bookmarkList ,msg));
    }

    @Transactional
    public ResponseEntity<Message> resourceRegister(HttpServletRequest req, ResourceAdminDto resourceAdminDto){
            if(resourceAdminDto.getCateNo() == 1){
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
                    fileupload(resourceAdminDto);

                    Message message = Message.builder()
                            .resCode(3000)
                            .message("성공: 회의실 등록")
                            .data(office)
                            .build();
                    return new JsonResponse().send(200, message);

                }else if (resourceAdminDto.getCateNo() == 2){
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
                    fileupload(resourceAdminDto);
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
                    fileupload(resourceAdminDto);
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

    public void fileupload(ResourceAdminDto resourceAdminDto){
        List<Resourcefile> resourcefile = resourceAdminDto.getResourcefile();

        Map<String, Resourcefile> map = new HashMap<>();

        for (int i = 0; i < resourcefile.size(); i++){
            map.put("resourcefile", resourcefile.get(i));
            resourcefileRepository.save(map.get("resourcefile"));
        }
    }


    @Transactional
    public ResponseEntity<Message> resourceUpdate(HttpServletRequest req, Long resourceNo, Resource resource){

        Resource updateResource = resourceRepository.findByResourceNo(resourceNo);

        if(updateResource != null ){
            System.out.println("updateResource존재");

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
    public ResponseEntity<Message> delresourceList(Long resourceNo){
        Resource delesourse = resourceRepository.findByResourceNo(resourceNo);
        System.out.println(delesourse);

        if(delesourse != null){
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

        Map<String,List<ReservationManagementDto>> list = new HashMap<>();
        list.put("presentReservList",presentReservList);
        list.put("pastReservList",pastReservList);

        Message message = Message.builder()
                .resCode(1000)
                .message("[Success] : Select resourceBookingList")
                .data(list)
                .build();
        return new JsonResponse().send(400, message);
    }
}
