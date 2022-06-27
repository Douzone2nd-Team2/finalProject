package com.team2.backend.service.user;

import com.team2.backend.domain.resource.Resource;
import com.team2.backend.domain.resource.ResourceRepository;
import com.team2.backend.web.dto.JsonResponse;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.admin.IResourceAdminDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class UserMainService {

    private final ResourceRepository resourceRepository;

    @Transactional
    public ResponseEntity<Message> getResourcenameList(String resourceName) {
        List<IResourceAdminDto> selectResourceNameList = resourceRepository.findByResourceName(resourceName);

        if (selectResourceNameList == null) {
            Message message = Message.builder()
                    .resCode(3001)
                    .message("실패: resourceName검색 실패")
                    .build();
            return new JsonResponse().send(400, message);
        }

        Message message = Message.builder()
                .resCode(3000)
                .message("성공: resourceName검색 성공")
                .data(selectResourceNameList)
                .build();
        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> getResourceoptionList(String option) {
        List<IResourceAdminDto> selectResourceOptionList = resourceRepository.findByOption(option);
        if (selectResourceOptionList == null) {
            Message message = Message.builder()
                    .resCode(3001)
                    .message("실패: option으로 검색 실패")
                    .build();
            return new JsonResponse().send(400, message);
        }

        Message message = Message.builder()
                .resCode(3000)
                .message("성공: option으로 검색 성공")
                .data(selectResourceOptionList)
                .build();
        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> getResourceofuelList(String fuel) {
        List<IResourceAdminDto> selectResourcefuelList = resourceRepository.findByFuel(fuel);
        if (selectResourcefuelList == null) {
            Message message = Message.builder()
                    .resCode(3001)
                    .message("실패: fuel으로 검색 실패")
                    .build();
            return new JsonResponse().send(400, message);
        }

        Message message = Message.builder()
                .resCode(3000)
                .message("성공: fuel으로 검색 성공")
                .data(selectResourcefuelList)
                .build();
        return new JsonResponse().send(200, message);
    }
}
