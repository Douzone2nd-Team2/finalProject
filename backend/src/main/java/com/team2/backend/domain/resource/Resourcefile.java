package com.team2.backend.domain.resource;

import com.team2.backend.domain.util.BaseTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="resource_file")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@DynamicUpdate
@DynamicInsert
@Builder
public class Resourcefile extends BaseTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="imageNo", updatable = false, nullable = false)
    private Long imageNo;

    @Column(name="able", columnDefinition = "varchar(1) default 'Y'")
    private String able;

    @Column(name="imageName")
    private String imageName;

    @ManyToOne(targetEntity= Resource.class)
    @JoinColumn(name="resourceNo", insertable = false, updatable = false)
    private Resource resource;
    @Column(name="resourceNo")
    private Long resourceNo;

    @Column(name="path")
    private String path;

    @Column(name="type")
    private String type;

    @Column(name="imageSize")
    private String imageSize;

    @Builder
    public Resourcefile(Long resourceNo, String path, String type, String imageSize, String imageName) {
        this.resourceNo = resourceNo;
        this.path = path;
        this.type = type;
        this.imageSize = imageSize;
        this.imageName = imageName;

    }


}
