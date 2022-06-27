package com.team2.backend.config.security.auth;

import com.team2.backend.config.security.utils.JwtTokenProvider;
import com.team2.backend.domain.user.Employee;
import com.team2.backend.domain.user.EmployeeRepository;
import com.team2.backend.web.dto.HttpResponse;
import com.team2.backend.web.dto.Message;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AuthCheckFilter extends BasicAuthenticationFilter {

    private EmployeeRepository employeeRepository;
    private JwtTokenProvider jwtTokenProvider;

    public AuthCheckFilter(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, EmployeeRepository employeeRepository) {
        super(authenticationManager);
        this.employeeRepository = employeeRepository;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {

        System.out.println("-------- AuthCheckFilter ---------");

        String header = jwtTokenProvider.getAccessTokenFromHeader(request);

        if (header == null || !header.startsWith("Bearer%")) {
            System.out.println("[ERROR] Invalid Token");
            chain.doFilter(request, response);
            return;
        }

        String accessToken = header.split("%")[1];

        if (jwtTokenProvider.isValidAccessToken(accessToken)) {
            Long userNo = jwtTokenProvider.verifyAccessToken(accessToken).getClaim("userNo").asLong();
            if (userNo == null) {
                System.out.println("[WARN] Invalid claim 'userNo'");
                return;
            }

            Employee employee = employeeRepository.findByNo(userNo);
            EmployeeDetails employeeDetails = new EmployeeDetails(employee);
            Authentication authentication = new UsernamePasswordAuthenticationToken(employeeDetails.getUsername(), null, employeeDetails.getAuthorities());

            SecurityContextHolder.getContext().setAuthentication(authentication);
            System.out.println("ㅍㄹ터 : " + userNo);
            request.setAttribute("userNo", userNo);

            chain.doFilter(request, response);
        }
        else {
            System.out.println("[WARN] Expired Access Token");

            Message message = Message.builder()
                    .resCode(1)
                    .message("Expired Access Token")
                    .build();
            HttpResponse.sendMessage(response, message);
            return;
        }
    }
}
