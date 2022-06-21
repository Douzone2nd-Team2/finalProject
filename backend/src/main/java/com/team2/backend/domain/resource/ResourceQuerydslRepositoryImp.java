package com.team2.backend.domain.resource;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.team2.backend.web.dto.admin.QResourceAdminDto;
import com.team2.backend.web.dto.admin.ResourceAdminDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.team2.backend.domain.resource.QResource.resource;

@Repository
@RequiredArgsConstructor
public class ResourceQuerydslRepositoryImp implements ResourceQuerydslRepository{
    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public List<ResourceAdminDto> getOfficeList() {
        return null;
    }

    @Override
    public List<ResourceAdminDto> getCarList() {
        return null;
    }

    @Override
    public List<ResourceAdminDto> getLaptopList() {
        return null;
    }

    @Override
    public List<ResourceAdminDto> getAllResourceList() {
        return null;

//        return jpaQueryFactory
//                .select(new QResourceAdminDto(
//                        resource.resourceNo,
//                        resource.cateNo,
//                        resource.able,
//                        resource.resourceName,
//                        resource.location,
//                        resource.people,
//                        resource.availableTime,
//                        resource.adminNo,
//                        resource.option,
//                        resource.createAt,
//                        resource.modifyAt
//                ))
//                .from(resource)
//                .fetch();
//        return jpaQueryFactory
//                .selectFrom(resource)
//                .fetch();
    }
}
