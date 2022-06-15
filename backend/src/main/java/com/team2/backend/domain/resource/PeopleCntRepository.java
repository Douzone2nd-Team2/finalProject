package com.team2.backend.domain.resource;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PeopleCntRepository extends JpaRepository<PeopleCnt, Long> {
}
