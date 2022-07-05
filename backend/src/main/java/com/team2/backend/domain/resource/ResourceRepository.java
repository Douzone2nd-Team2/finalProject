package com.team2.backend.domain.resource;

import com.team2.backend.web.dto.admin.IResourceAdminDto;
import com.team2.backend.web.dto.admin.ResourceAdminDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Repository
public interface ResourceRepository extends JpaRepository<Resource, Long> {
    @Query(value = "select r.resourceNo as resourceNo , r.cateNo as cateNo, c.cateName as cateName, r.able as able,\n" +
            "            r.resourceName as resourceName, r.location as location, r.fuel as fuel, \n" +
            "            r.people as people, r.availableTime as availableTime, r.adminNo as adminNo, " +
            "            r.option as option, r.createAt as createAt, r.modifyAt as modifyAt\n" +
            "            from Resource r\n" +
            "            join Employee e on r.adminNo = e.no\n" +
            "            join Category c on c.cateNo = r.cateNo"+
            "            order by r.resourceNo")
    List<IResourceAdminDto> findAllResource();

    @Query(value="select r.resourceNo as resourceNo , r.cateNo as cateNo, c.cateName as cateName, r.able as able, r.people as people," +
            "r.resourceName as resourceName, r.location as location, " +
            " r.availableTime as availableTime, r.adminNo as adminNo, r.option as option, r.createAt as createAt, r.modifyAt as modifyAt" +
            " from Resource r " +
            " join Employee e on r.adminNo = e.no " +
            " join Category c on c.cateNo = r.cateNo"+
            " where r.cateNo = :cateNo"+
            " order by r.resourceNo",nativeQuery = true)
    List<IResourceAdminDto> findByCateNo(@Param("cateNo") long cateNo);

    @Query(value="select r.resourceNo as resourceNo , r.cateNo as cateNo, c.cateName as cateName, r.able as able, r.people as people, r.fuel as fuel, " +
            "r.resourceName as resourceName, r.location as location, " +
            " r.availableTime as availableTime, r.adminNo as adminNo, r.option as option, r.createAt as createAt, r.modifyAt as modifyAt" +
            " from Resource r " +
            " join Employee e on r.adminNo = e.no " +
            " join Category c on c.cateNo = r.cateNo"+
            " where r.cateNo =:cateNo " +
            " and r.able = 'Y' " +
            " and (r.resourceName like %:keyword% or r.option like %:keyword% or r.fuel like %:keyword% )", nativeQuery = true)
    List<IResourceAdminDto> getfindKeyword(@Param("keyword") String keyword, @Param("cateNo") Long cateNo);

    Resource findByResourceNo(long resourceNo);

    @Query(value="select r.cateNo from Resource r where r.resourceNo = :#{#resourceNo}")
    Long findByCategory(long resourceNo);

}
