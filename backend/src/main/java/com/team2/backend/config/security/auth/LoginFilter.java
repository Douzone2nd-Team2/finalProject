package com.team2.backend.config.security.auth;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.team2.backend.config.security.utils.JwtTokenProvider;
import com.team2.backend.domain.user.Employee;
import com.team2.backend.web.dto.HttpResponse;
import com.team2.backend.web.dto.Message;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class LoginFilter extends UsernamePasswordAuthenticationFilter {

    private AuthenticationManager authenticationManager;
    private JwtTokenProvider jwtTokenProvider;

    public LoginFilter(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        System.out.println("--------------- ApiLoginFilter ---------------");

        ObjectMapper om = new ObjectMapper();
        Employee employee = null;
        try {
            employee = om.readValue(request.getInputStream(), Employee.class);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        String userId = employee.getUserId();
        String password = employee.getPassword();

        try {
            UsernamePasswordAuthenticationToken authenticationToken =
                    new UsernamePasswordAuthenticationToken(userId, password);

            Authentication authentication = getAuthenticationManager().authenticate(authenticationToken);

            return authentication;
        } catch (NullPointerException e) {
            try {
                unsuccessfulAuthentication(request, response, e);
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        }

        return null;
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        System.out.println("[SUCCESS] Verify Access Token");

        Long userNo = ((EmployeeDetails) authResult.getPrincipal()).getEmployee().getNo();

        String accessToken = jwtTokenProvider.createAccessToken(userNo);

        response.setHeader(jwtTokenProvider.getACCESS_TOKEN_HEADER(), jwtTokenProvider.getACCESS_TOKEN_PREFIX() + accessToken);
        Message message = Message.builder()
                .resCode(0)
                .message("Login Success")
                .build();
        HttpResponse.sendMessage(response, message);
    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) throws IOException, ServletException {
        System.out.println("[FAIL] Verify Faild Access Token");

        Message message = Message.builder()
                .resCode(1)
                .message("Login Fail")
                .build();
        HttpResponse.sendMessage(response, message);
    }

    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, NullPointerException failed) throws IOException {
        System.out.println("[FAIL] Verify Faild Access Token");

        Message message = Message.builder()
                .resCode(1)
                .message("Invalid Employee")
                .build();
        HttpResponse.sendMessage(response, message);
    }
}
