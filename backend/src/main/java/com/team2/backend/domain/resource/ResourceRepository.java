package com.team2.backend.domain.resource;

import com.team2.backend.web.dto.admin.ResourceDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ResourceRepository extends JpaRepository<Resource, Long> {

    public List<Resource> findByCateNo(long cateNo);
    public Resource findByResourceNo(long resourceNo);
}
