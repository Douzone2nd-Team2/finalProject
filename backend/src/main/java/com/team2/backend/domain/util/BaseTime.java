package com.team2.backend.domain.util;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass   // 공통 매핑 정보 필요
@EntityListeners(AuditingEntityListener.class)
public class BaseTime {

    @CreatedDate  //entity 생성시간 처리
    private LocalDateTime createAt;

    @LastModifiedDate  //최종 수정시간 자동 처리
    private LocalDateTime modifyAt;

}
