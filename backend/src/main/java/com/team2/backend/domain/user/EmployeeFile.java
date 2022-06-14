package com.team2.backend.domain.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="employee_file")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@DynamicUpdate
@DynamicInsert
@Builder
public class EmployeeFile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="imageno", updatable = false, nullable = false)
    private Long imageNo;

    @Column(name="able", columnDefinition = "default 'Y'")
    private char able;

    @OneToOne
    @JoinColumn(name="no")
    @Column(name="userno")
    private Long userNo;

    @Column(name="path")
    private String path;

    @Column(name="type")
    private String type;

    @Column(name="imagesize")
    private String imageSize;

    @CreatedDate
    @Column(name="createat")
    private LocalDateTime createAt;
}
