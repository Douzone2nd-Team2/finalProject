package com.team2.backend.domain.resource;

import com.team2.backend.web.dto.admin.ReservationManagementDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface PeopleCntRepository extends JpaRepository<PeopleCnt, Long> {
    void deleteByReservNo(Long reservNo);

    List<PeopleCnt> findByReservNo(Long reservNo);

    @Transactional
    @Modifying
    @Query("DELETE FROM PeopleCnt WHERE reservNo = :reservNo")
    void deleteAllByReservNo(@Param("reservNo")Long reservNo);
}
