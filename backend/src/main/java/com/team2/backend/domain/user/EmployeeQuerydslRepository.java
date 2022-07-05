package com.team2.backend.domain.user;

import com.team2.backend.web.dto.admin.EmployeeManagementDto;

import java.util.List;

public interface EmployeeQuerydslRepository {
    //관리자 - 사용자 전체 조회
    List<EmployeeManagementDto> getAllEmployeeList();
    //관리자 - 사용자 상세 조회
    List<EmployeeManagementDto> getEmployeeView(String userNo);
    List<EmployeeManagementDto> getMainEmployee(String userId);

}
