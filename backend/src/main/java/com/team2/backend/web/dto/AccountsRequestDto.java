package com.team2.backend.web.dto;

import com.team2.backend.domain.employee.Employee;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;

@Getter
@NoArgsConstructor
public class AccountsRequestDto {

    private Character able;
    private String userId;
    private String password;

    @Builder
    public AccountsRequestDto(Character able, String userId, String password) {
        this.able = able;
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
