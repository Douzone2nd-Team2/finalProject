package com.team2.backend.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Employee findByUserId(String userId);
    Employee findByNo(Long userNo);
    Boolean existsByUserId(String userId);

}
