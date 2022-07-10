package com.team2.backend.domain.bookmark;

import com.team2.backend.web.dto.admin.IResourceAdminDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
    @Query(value = "select b.bookmarkno as bookmarkno , b.resourceNo as resourceno, r.able as able," +
            "                        r.resourceName as resourceName, r.location as location, r.fuel as fuel," +
            "                        r.people as people, r.availableTime as availableTime, r.adminNo as adminNo," +
            "                        r.option as option,r.content as content, r.createAt as createAt, r.modifyAt as modifyAt," +
            "                        rf.path as path" +
            "                        from Bookmark b" +
            "                        join Employee e on b.userno = e.no" +
            "                        join Resource r on b.resourceno = r.resourceno" +
            "            left join (select a.path as path, a.resourceno as resourceno from" +
            "             (select resourceno, path, row_number() over(partition by resourceno order by createat desc) as row" +
            "               from resource_file where able='Y') a" +
            "               where a.row = 1 ) rf" +
            "            on r.resourceno = rf.resourceno" +
            "                        order by r.resourceNo",nativeQuery = true)
    List<IResourceAdminDto> findBookmark();

    List<Bookmark> findAllByUserNo(Long userNo);
    Bookmark findByUserNoAndResourceNo(Long userNo, Long resourceNo);

}
