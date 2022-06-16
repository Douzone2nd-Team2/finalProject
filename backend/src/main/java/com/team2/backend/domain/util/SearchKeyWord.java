package com.team2.backend.domain.util;

import com.team2.backend.domain.user.Employee;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.apache.tomcat.jni.Local;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="search_key_word")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@DynamicUpdate
@DynamicInsert
@Builder
public class SearchKeyWord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="searchNo")
    private Long searchNo;

    @Column(name="keyword")
    private String keyword;

    @ManyToOne(targetEntity = Employee.class, fetch = FetchType.LAZY)
    @JoinColumn(name="userNo")
    private Long userNo;

    @CreatedDate
    @Column(name="createAt")
    private LocalDateTime createAt;

}
