package com.team2.backend.domain.notice;

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
@Getter
@Table(name="notice_file")
@NoArgsConstructor
@AllArgsConstructor
@DynamicUpdate
@DynamicInsert
@Builder
public class NoticeFile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="imageNo")
    private Long imageNo;

    @Column(name="able", columnDefinition = "char(1) default 'Y'")
    private char able;

//    @ManyToOne(targetEntity = Notice.class, fetch = FetchType.LAZY)
//    @JoinColumn(name="noticeNo")
    @Column(name="noticeNo")
    private Long noticeNo;

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
