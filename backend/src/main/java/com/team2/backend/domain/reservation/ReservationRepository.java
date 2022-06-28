package com.team2.backend.domain.reservation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    Reservation findByReservNo(Long reservNo);
    List<Reservation> findAllByResourceNo(Long resourceNo); // 와 이거 어쩜

    @Query(value = "select r.reservNo as reservNo, r.resourceNo as resourceNo, r.reservName as reservName, " +
            "r.startTime as startTime, r.endTime as endTime, " +
            "re.option as option, re.resourceName as resourceName, c.cateName as cateName, rf.path as imageUrl from reservation r " +
            "join resource re " +
            "on r.resourceno = re.resourceno " +
            "join category c " +
            "on re.cateno = c.cateno "
            +"left join (select resourceno, path, row_number() over(partition by resourceno order by createat desc) from resource_file where able='Y') rf " +
            "on r.resourceno = rf.resourceno " +
            "where r.userno = :userNo " +
            "and r.endTime > now()", nativeQuery = true)
    List<IMainReservationDto> getMainReservList(@Param("userNo") Long userNo);
}
