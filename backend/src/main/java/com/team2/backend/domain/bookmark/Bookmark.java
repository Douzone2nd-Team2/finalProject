package com.team2.backend.domain.bookmark;

import com.team2.backend.domain.resource.Resource;
import com.team2.backend.domain.user.Employee;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name = "bookmark")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@DynamicUpdate
public class Bookmark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="bookmarkno")
    private Long bookmarkNo;

    @ManyToOne(targetEntity = Employee.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "userno")
    private Long userNo;

    @ManyToOne(targetEntity = Resource.class,fetch = FetchType.LAZY)
    @JoinColumn(name = "resoureno")
    private int resourceNo;
}
