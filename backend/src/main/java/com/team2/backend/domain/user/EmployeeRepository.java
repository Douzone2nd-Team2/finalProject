package com.team2.backend.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Employee findByUserId(String userId);
    Employee findByNo(Long userNo);
    Boolean existsByUserId(String userId);
}
