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
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AuthCheckFilter extends BasicAuthenticationFilter {

//    private EmployeeRepository employeeRepository;
    private EmployeeDetailsService employeeDetailsService;
    private JwtTokenProvider jwtTokenProvider;

    public AuthCheckFilter(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, EmployeeDetailsService employeeDetailsService) {
        super(authenticationManager);
        this.employeeDetailsService = employeeDetailsService;
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
            String userId = jwtTokenProvider.verifyAccessToken(accessToken).getClaim("userId").asString();
            if (userId == null || userId.isEmpty()) {
                System.out.println("[WARN] Invalid claim 'userId'");
                return;
            }
//        if (jwtTokenProvider.isValidAccessToken(accessToken)) {
//            Long userNo = jwtTokenProvider.verifyAccessToken(accessToken).getClaim("userNo").asLong();
//            if (userNo == null) {
//                System.out.println("[WARN] Invalid claim 'userNo'");
//                return;
//            }

//            Employee employee = employeeRepository.findByNo(userNo);
//            EmployeeDetails employeeDetails = new EmployeeDetails(employee);
//            Authentication authentication = new UsernamePasswordAuthenticationToken(employeeDetails.getUsername(), null, employeeDetails.getAuthorities());
//
//            SecurityContextHolder.getContext().setAuthentication(authentication);
//            System.out.println("필터 : " + userNo);
//            System.out.println(employeeDetails.getAuthorities());
//            request.setAttribute("userNo", userNo);

            UserDetails employeeDetails = employeeDetailsService.loadUserByUsername(userId);
            UsernamePasswordAuthenticationToken authenticationToken =
                    new UsernamePasswordAuthenticationToken(employeeDetails, null, employeeDetails.getAuthorities());

            authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);

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
