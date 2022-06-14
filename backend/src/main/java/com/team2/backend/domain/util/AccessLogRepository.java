package com.team2.backend.domain.util;

import net.bytebuddy.build.RepeatedAnnotationPlugin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccessLogRepository extends JpaRepository<AccessLog, Long> {
}
