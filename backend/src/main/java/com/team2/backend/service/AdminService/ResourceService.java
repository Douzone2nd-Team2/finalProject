package com.team2.backend.service.AdminService;

import com.team2.backend.domain.resource.Resource;
import com.team2.backend.domain.resource.ResourceRepository;
import com.team2.backend.web.dto.admin.ResourceDto;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@RequiredArgsConstructor
@Service
public class ResourceService {
    @Autowired
    private ResourceRepository resourceRepository;

    public List<Resource> getResourceList(){
        return resourceRepository.findAll();
    }
    public List<Resource> getEachList(long category){
        List<Resource> officlist = resourceRepository.findByCategory(category);
        return officlist;
    }
    public ResourceDto register(ResourceDto resourceDto){
        resourceRepository.save(resourceDto.toEntity());
        return  resourceDto;
    }


}
