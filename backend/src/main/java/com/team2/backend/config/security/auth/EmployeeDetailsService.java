package com.team2.backend.config.security.auth;

import com.team2.backend.domain.employee.Employee;
import com.team2.backend.domain.employee.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class EmployeeDetailsService implements UserDetailsService {

    private final EmployeeRepository employeeRepository;

    @Override
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {

        if (!employeeRepository.existsByUserId(userId)) {
            System.out.println("[WARN] Invalid employee");
        }
        Employee user = employeeRepository.findByUserId(userId);
        return new EmployeeDetails(user);
    }
}
