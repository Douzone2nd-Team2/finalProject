package com.team2.backend.domain.resource;

import com.team2.backend.web.dto.admin.IResourceAdminDto;
import com.team2.backend.web.dto.admin.ResourcefileDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ResourcefileRepository extends JpaRepository<Resourcefile, Long> {

    void save(List<ResourcefileDto> resourcefileDtoList);
}
