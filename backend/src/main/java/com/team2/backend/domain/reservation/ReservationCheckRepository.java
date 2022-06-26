package com.team2.backend.domain.reservation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ReservationCheckRepository extends JpaRepository<ReservationCheck, Long> {

    ReservationCheck findByResourceNoAndCheckDate(Long resourceNo,Date checkDate);
    List<ReservationCheck> findAllByResourceNoAndCheckDateBetween(Long resourceNo, Date startTime, Date endTime);
}
