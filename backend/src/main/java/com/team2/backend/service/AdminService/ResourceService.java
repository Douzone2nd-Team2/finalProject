package com.team2.backend.service.AdminService;

import com.team2.backend.domain.resource.Resource;
import com.team2.backend.domain.resource.ResourceRepository;
import com.team2.backend.web.dto.JsonResponse;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.admin.ResourceDto;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ResourceService {
    @Autowired
    private ResourceRepository resourceRepository;

    @Transactional
    public ResponseEntity<Message> getResourceList(){
        List<Resource> AresourceList = resourceRepository.findAll();
        if (AresourceList.isEmpty()) {
            Message message = Message.builder()
                    .resCode(3001)
                    .message("실패: 전체조회 안됨")
                    .build();
            return new JsonResponse().send(400, message);
        }

        Message message = Message.builder()
                .resCode(3000)
                .message("성공: 전체조회 잘됨")
                .data(AresourceList)
                .build();
        return new JsonResponse().send(200, message);
    }
    @Transactional
    public ResponseEntity<Message> getEachList(long category){
        List<Resource> Aeachlist = resourceRepository.findByCategory(category);
        if (Aeachlist.isEmpty()) {
            Message message = Message.builder()
                    .resCode(3001)
                    .message("실패: 전체조회 실패")
                    .build();
            return new JsonResponse().send(400, message);
        }

        Message message = Message.builder()
                .resCode(3000)
                .message("성공: 전체조회 성공")
                .data(Aeachlist)
                .build();
        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> officeCreate(HttpServletRequest req, ResourceDto resourceDto){

            Resource office = resourceRepository.save(
                    Resource.builder()
                            .resourceNo(resourceDto.getResourceNo())
                            .category(resourceDto.getCategory())
                            .location(resourceDto.getLocation())
                            .availableTime(resourceDto.getAvailableTime())
                            .able(resourceDto.getAble())
                            .people(resourceDto.getPeople())
                            .adminNo(resourceDto.getAdminNo())
                            .option(resourceDto.getOption())
                            .build()
            );
            Message message = Message.builder()
                    .resCode(3000)
                    .message("성공: 회의실 등록")
                    .data(office)
                    .build();
            return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> carCreate(HttpServletRequest req, ResourceDto resourceDto){
        Resource car = resourceRepository.save(

                Resource.builder()
                        .resourceNo(resourceDto.getResourceNo())
                        .category(resourceDto.getCategory())
                        .resourceName(resourceDto.getResourceName())
                        .location(resourceDto.getLocation())
                        .people(resourceDto.getPeople())
                        .availableTime(resourceDto.getAvailableTime())
                        .fuel(resourceDto.getFuel())
                        .build()
        );
        Message message = Message.builder()
                .resCode(3000)
                .message("성공: 차량 등록")
                .data(car)
                .build();
        return new JsonResponse().send(200, message);
    }


    @Transactional
    public ResponseEntity<Message> delresourceList(Long resourceNo){
        resourceRepository.deleteById(resourceNo);

        Message message = Message.builder()
                .resCode(3000)
                .message("성공: 해당 자원 삭제")
                .build();
        return new JsonResponse().send(200, message);

    }




}
