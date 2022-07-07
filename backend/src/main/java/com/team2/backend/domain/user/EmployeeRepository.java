package com.team2.backend.domain.user;

import com.team2.backend.web.dto.admin.EmployeeManagementDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.team2.backend.domain.user.Employee;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Employee findByUserId(String userId);
    Employee findByNo(Long userNo);
    Boolean existsByUserId(String userId);
    Employee findByEmpNo(String empNo);

    void deleteByNo(Long userNo);

//    @Query(value="update employee set password = :password where no = :userNo", nativeQuery = true)
//    void changePw(@Param(value="userNo") Long userNo, @Param(value="password") String password);
}
