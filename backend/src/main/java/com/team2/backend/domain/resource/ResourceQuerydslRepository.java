package com.team2.backend.domain.resource;

import com.team2.backend.web.dto.admin.ResourceAdminDto;

import java.util.List;

public interface ResourceQuerydslRepository {
    List<ResourceAdminDto> getAllResourceList();
    List<ResourceAdminDto> getOfficeList();
    List<ResourceAdminDto> getCarList();
    List<ResourceAdminDto> getLaptopList();
}
