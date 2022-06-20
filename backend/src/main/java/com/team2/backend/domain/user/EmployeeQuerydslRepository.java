package com.team2.backend.domain.user;

import com.team2.backend.web.dto.admin.EmployeeManagementDto;

import java.util.List;

public interface EmployeeQuerydslRepository {
    List<EmployeeManagementDto> getAllEmployeeList();
}
