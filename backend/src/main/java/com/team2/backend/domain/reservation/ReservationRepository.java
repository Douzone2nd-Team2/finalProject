package com.team2.backend.domain.reservation;

import com.team2.backend.web.dto.admin.ReservationManagementDto;
import com.team2.backend.web.dto.user.MyReservationInfoDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    Reservation findByReservNo(Long reservNo);
    List<Reservation> findAllByResourceNo(Long resourceNo); // 와 이거 어쩜

    List<Reservation> findAllByUserNo(Long userNo);

    @Query(value = "select r.reservNo as reservNo, r.resourceNo as resourceNo, r.reservName as reservName, " +
            "r.startTime as startTime, r.endTime as endTime, " +
            "re.option as option, re.resourceName as resourceName, c.cateName as cateName, rf.path as imageUrl from reservation r " +
            "join resource re " +
            "on r.resourceno = re.resourceno " +
            "join category c " +
            "on re.cateno = c.cateno "+
            "left join (select * from " +
            " (select resourceno, path, row_number() over(partition by resourceno order by createat desc) as row " +
            "   from resource_file where able='Y') a " +
            "   where a.row = 1 ) rf " +
            "on r.resourceno = rf.resourceno " +
            "where r.userno = :userNo " +
            " and r.able = 'Y' " +
            "and r.endTime > (select now() AT TIME ZONE 'Asia/Seoul')", nativeQuery = true)
    List<IMainReservationDto> getMainReservList(@Param("userNo") Long userNo);  //이미지 가장 최신 것 뽑아옴

    @Query(value="select count(t.timeno) as timeCnt , (select count(*)* 48 from resource where cateno = :cateNo)as resourceCnt " +
                 "from reservation_check rc " +
                    "join timelist t on rc.checkno = t.checkno " +
                 "where rc.checkdate = to_char((select now() AT TIME ZONE 'Asia/Seoul'), 'YYYY-MM-DD') and rc.cateno = :cateNo", nativeQuery = true)
    IMainReservationDto getMainFrequencyUsageList(@Param("cateNo") int cateNo);

    @Query(value="select a.resourceno as resourceNo, a.resourcename as resourceName, a.option as option, " +
            " a.people as people, a.fuel as fuel, a.content as content, b.imageNo as imageNo, b.path as imageUrl, a.cateNo as cateNo, c.cateName as cateName  " +
            "from resource a " +
            "join category c on a.cateNo = c.cateNo " +
                "left join (select imageno, resourceno, path, row_number() over(partition by resourceno) " +
                       "from resource_file " +
                      "where able = 'Y' " +
                      ") b on a.resourceno = b.resourceno " +
            "where a.able = 'Y' " +
            "and a.resourceno = (select r2.resourceno " +
            "from " +
                 "(select r.resourceno, count(*) as resourceCnt " +
                  "from reservation r " +
                    "join resource re on r.resourceno = re.resourceno " +
                "where re.cateno = :cateNo group by r.resourceno) r2 " +
                "order by r2.resourceCnt desc limit 1) " +
            "order by b.imageno asc limit 1 ", nativeQuery = true)
    IMainReservationDto getMainRecommendList(@Param("cateNo") int cateNo);

    @Query(value="select gs.cnt as hour, coalesce(reservT.listNo,0) as cnt " +
            "from " +
            "(select generate_series as cnt from generate_series(0,47)) as gs " +
            "left join " +
            "(select t.timeno, count(listno) as listNo " +
            " from reservation_check " +
            "          join timelist t on reservation_check.checkno = t.checkno " +
            " where cateno = :cateNo " +
            " group by t.timeno " +
            " order by t.timeno) reservT " +
            "on gs.cnt = reservT.timeno ", nativeQuery = true)
    List<IMainReservationDto> getMainHourList(@Param("cateNo") Long cateNo);

    void deleteByReservNo(Long reservNo);

    @Query(value="select count(*) as cnt from resource where able = 'Y' and cateno = :cateNo", nativeQuery = true)
    int getResourceTotalCnt(@Param("cateNo") Long cateNo);

    @Query(value="select to_char(starttime, 'yyyy-mm-dd') as startDate from reservation order by starttime asc limit 1", nativeQuery = true)
    String getStartDate();

    @Query(value="select to_char(endtime, 'yyyy-mm-dd') as endDate from reservation order by endtime desc limit 1", nativeQuery = true)
    String getEndDate();

    @Transactional
    @Modifying
    @Query("DELETE FROM Reservation WHERE reservNo = :reservNo")
    void deleteAllByReservNo(@Param("reservNo")Long reservNo);

    @Transactional
    @Modifying
    @Query("UPDATE Reservation SET reservName = :reservName, able = :able WHERE reservNo = :reservNo")
    void addReservaionInfo(@Param("reservNo")Long reservNo, @Param("able")String able, @Param("reservName")String reservName);


    @Query(value = "select\n" +
            "    r.reservno as reservNo, e.name as name, r.reservname as reservName, r.starttime as startTime, r.endtime as endTime,\n" +
            "    r2.resourcename as resourceName, r2.option, r2.location, r2.availabletime as availableTime, r2.content as content, r2.fuel as fuel, r2.people as people,\n" +
            "    rf.path as imageUrl, c.catename as cateName, c.cateno as cateNo\n" +
            "\n" +
            "    from reservation r\n" +
            "    join employee e on r.userno = e.no\n" +
            "    join resource r2 on r2.resourceno= r.resourceno\n" +
            "    join category c on r2.cateno = c.cateno\n" +
            "    left join (select * from\n" +
            "        (select resourceno, path, row_number() over(partition by resourceno order by createat desc ) as row\n" +
            "         from resource_file\n" +
            "         where able='Y') a\n" +
            "               where a.row = 1) rf\n" +
            "        on r2.resourceno = rf.resourceno\n" +
            "where r.reservno = :reservNo", nativeQuery = true)
    List<IMainReservationDto> getMyReservationInfo(@Param("reservNo")Long reservNo);

    @Transactional
    @Modifying
    @Query("DELETE FROM Reservation WHERE reservNo = :reservNo AND able = :able")
    void deleteAllByReservNoAndAble(@Param("reservNo")Long reservNo, @Param("able")String able);

    List<Reservation> findAllByAbleAndModifyAtBefore(String able, LocalDateTime modifiyAt);
}
