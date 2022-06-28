package com.team2.backend.domain.user;

import com.team2.backend.domain.resource.Resource;
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
    @Column(name="imageNo", updatable = false, nullable = false)
    private Long imageNo;

    @Column(name="able", columnDefinition = "varchar(1) default 'Y'")
    private String able;

//    @OneToOne(targetEntity = Employee.class, fetch = FetchType.LAZY)
//    @JoinColumn(name="userNo")
    @Column(name="userNo")
    private Long userNo;

    @Column(name="path")
    private String path;

    @Column(name="type")
    private String type;

    @Column(name="imageSize")
    private String imageSize;

    @CreatedDate
    @Column(name="createAt")
    private LocalDateTime createAt;

}
