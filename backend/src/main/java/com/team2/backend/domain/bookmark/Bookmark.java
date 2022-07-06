package com.team2.backend.domain.bookmark;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @Column(name="bookmarkNo")
    private Long bookmarkNo;

    @ManyToOne(targetEntity = Employee.class)
    @JoinColumn(name = "userNo", insertable = false, updatable = false)
    @JsonIgnore
    private Employee user;
    @Column(name = "userNo")
    private Long userNo;

    @ManyToOne(targetEntity = Resource.class)
    @JoinColumn(name = "resourceNo", insertable = false, updatable = false)
    @JsonIgnore
    private Resource resource;
    @Column(name = "resourceNo")
    private Long resourceNo;

}
