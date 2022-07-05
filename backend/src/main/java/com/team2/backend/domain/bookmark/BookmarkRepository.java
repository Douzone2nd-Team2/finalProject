package com.team2.backend.domain.bookmark;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {

    List<Bookmark> findAllByUserNo(Long userNo);
    Bookmark findByUserNoAndResourceNo(Long userNo, Long resourceNo);
}
