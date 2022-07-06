package com.team2.backend.config.socket;

import com.team2.backend.config.security.auth.EmployeeDetails;
import com.team2.backend.config.security.auth.EmployeeDetailsService;
import com.team2.backend.config.security.utils.JwtTokenProvider;
import com.team2.backend.domain.user.Employee;
import com.team2.backend.domain.user.EmployeeRepository;
import com.team2.backend.web.dto.HttpResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.messaging.support.MessageHeaderAccessor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;

import java.security.Principal;

@RequiredArgsConstructor
@Component
public class StompHandler implements ChannelInterceptor {
    private final JwtTokenProvider jwtTokenProvider;
    private final EmployeeDetailsService employeeDetailsService;

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);
        if (accessor.getCommand() == StompCommand.CONNECT) {
            String header = accessor.getFirstNativeHeader("Authorization");
            if (header == null || !header.startsWith("Bearer%")) {
                throw new RuntimeException();
            }

            String accessToken = header.split("%")[1];

            if (jwtTokenProvider.isValidAccessToken(accessToken)) {
                String userId = jwtTokenProvider.verifyAccessToken(accessToken).getClaim("userId").asString();
                if (userId == null || userId.isEmpty()) {
                    System.out.println("[WARN] Invalid claim 'userId'");
                    throw new RuntimeException();
                }

                UserDetails employeeDetails = employeeDetailsService.loadUserByUsername(userId);
                UsernamePasswordAuthenticationToken authenticationToken =
                        new UsernamePasswordAuthenticationToken(employeeDetails, null, employeeDetails.getAuthorities());

                SecurityContextHolder.getContext().setAuthentication(authenticationToken);

                accessor.setUser((EmployeeDetails) authenticationToken.getPrincipal());
//                EmployeeDetails gd = (EmployeeDetails) accessor.getUser();
                return MessageBuilder.createMessage(message.getPayload(), accessor.getMessageHeaders());
            } else {
                System.out.println("[WARN] Expired Access Token");
                return message;
            }

        }

        return message;
    }
}