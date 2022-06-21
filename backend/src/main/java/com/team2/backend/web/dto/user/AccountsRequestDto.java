
package com.team2.backend.web.dto.user;

import com.team2.backend.domain.user.Employee;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class AccountsRequestDto {

    private String able;
    private String userId;
    private String password;

    @Builder
    public AccountsRequestDto(String able, String userId, String password) {
        this.able = able;
        this.userId = userId;
        this.password = password;
    }

    @Builder
    public AccountsRequestDto(String userId, String password) {
        this.userId = userId;
        this.password = password;
    }

    public Employee toEntity() {
        return Employee.builder()
                .able(able)
                .userId(userId)
                .password(password)
                .build();
    }
}
