package com.team2.backend.domain.employee;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Employee findByUserId(String userId);
    Boolean existsByUserId(String userId);
}
