package com.team2.backend.config.security.auth;


import com.team2.backend.domain.user.Employee;
import com.team2.backend.domain.user.EmployeeRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Qualifier;
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
        Employee emp = employeeRepository.findByUserId(userId);
        return new EmployeeDetails(emp);
    }
}
