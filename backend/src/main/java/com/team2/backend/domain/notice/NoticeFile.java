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
    @Column(name="imageno")
    private Long imageNo;

    @Column(name="able", columnDefinition = "default 'Y'")
    private char able;

    @ManyToOne(targetEntity = Notice.class, fetch = FetchType.LAZY)
    @JoinColumn(name="noticeno")
    @Column(name="noticeno")
    private Long noticeNo;

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
