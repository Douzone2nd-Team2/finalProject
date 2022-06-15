package com.team2.backend.domain.util;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SearchKeyWordRepository extends JpaRepository<SearchKeyWord, Long> {
}
