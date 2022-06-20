package com.team2.backend.config.security.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@Component
public class JwtTokenProvider {

    String ACCESS_TOKEN_SECRET_KEY = "secret";

    String ACCESS_TOKEN_HEADER = "Authorization";

    String ACCESS_TOKEN_PREFIX = "Bearer/";

    int ACCESS_TOKEN_EXPIRATION_TIME = 1000 * 60 * 60; // 60분

    public String createAccessToken(Long userNo) throws UnsupportedEncodingException {

        return JWT.create()
                .withSubject("access-token")
                .withExpiresAt(new Date(System.currentTimeMillis() + ACCESS_TOKEN_EXPIRATION_TIME))
                .withClaim("userNo", userNo)
                .sign(Algorithm.HMAC256(ACCESS_TOKEN_SECRET_KEY));
    }

    public String getAccessTokenFromHeader(HttpServletRequest request){
        return request.getHeader(ACCESS_TOKEN_HEADER);
    }

    public DecodedJWT verifyAccessToken(String token){
        return JWT.require(Algorithm.HMAC256(ACCESS_TOKEN_SECRET_KEY)).build().verify(token);
    }

    public boolean isValidAccessToken(String token){
        try{
            return !verifyAccessToken(token).getExpiresAt().before(new Date());
        }catch (Exception e){
            return false;
        }
    }
}
