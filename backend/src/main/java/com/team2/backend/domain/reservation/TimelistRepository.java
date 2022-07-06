package com.team2.backend.domain.reservation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface TimelistRepository extends JpaRepository<Timelist, Long> {

    Timelist findByCheckNo(Long checkNo);
    @Query("SELECT timeNo FROM Timelist WHERE checkNo = :checkNo")
    Long[] findAllByCheckNo(@Param("checkNo")Long checkNo);

    @Transactional
    @Modifying
    @Query("DELETE FROM Timelist WHERE checkNo = :checkNo")
    void deleteAllByCheckNo(@Param("checkNo")Long checkNo);
}
