package com.team2.backend.domain.util;

import lombok.Getter;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@DynamicInsert
@DynamicUpdate
public class BaseTime {

    @CreatedDate
    @Column(name="createAt")
    private LocalDateTime createAt;

    @LastModifiedDate
    @Column(name="modifyAt")
    private LocalDateTime modifyAt;

    public void changeTime(LocalDateTime createAt){
        this.createAt = createAt;
    }
}
