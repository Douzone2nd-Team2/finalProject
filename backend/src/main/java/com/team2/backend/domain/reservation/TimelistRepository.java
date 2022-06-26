package com.team2.backend.domain.reservation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TimelistRepository extends JpaRepository<Timelist, Long> {

    Timelist findByCheckNo(Long checkNo);
    @Query("SELECT timeNo FROM Timelist WHERE checkNo = :checkNo")
    Integer[] findAllByCheckNo(@Param("checkNo")Long checkNo);
}
