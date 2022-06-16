package com.team2.backend.domain.notice;

import com.team2.backend.domain.resource.Category;
import com.team2.backend.domain.util.BaseTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Getter
@Table(name="notice")
@NoArgsConstructor
@AllArgsConstructor
@DynamicUpdate
@DynamicInsert
@Builder
public class Notice extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="noticeNo")
    private Long noticeNo;

    @Column(name="able", columnDefinition = "char(1) default 'Y'")
    private char able;

    @ManyToOne(targetEntity = Category.class, fetch=FetchType.LAZY)
    @JoinColumn(name = "category")
    private Long category;

    @Column(name="noticeTitle")
    private String noticeTitle;

    @Column(name="noticeContent")
    private String noticeContent;

    @Column(name="priority")
    private int priority;

    @Column(name="hit")
    private Long hit;

}
