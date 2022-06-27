package com.team2.backend.domain.reservation;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.DateTemplate;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.querydsl.jpa.impl.JPAUpdateClause;
import com.team2.backend.web.dto.admin.QReservationManagementDto;
import com.team2.backend.web.dto.admin.ReservationManagementDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.beans.Expression;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;

import static com.team2.backend.domain.reservation.QTimelist.timelist;
import static com.team2.backend.domain.reservation.QReservationCheck.reservationCheck;
import static com.team2.backend.domain.reservation.QReservation.reservation;
import static com.team2.backend.domain.resource.QCategory.category;
import static com.team2.backend.domain.resource.QResource.resource;
import static com.team2.backend.domain.user.QEmployee.employee;

@Repository
@RequiredArgsConstructor
public class ReservationQuerydslRepositoryImpl implements ReservationQuerydslRepository{

    private final JPAQueryFactory jpaQueryFactory;

    @PersistenceContext
    private EntityManager entityManager;

    private BooleanExpression reservationClassification(String classsification) throws ParseException {
        if(classsification.equals("Present")){
            return reservation.endTime.goe(Expressions.currentTimestamp());
        } else if (classsification.equals("Past")) {
            return reservation.endTime.loe(Expressions.currentTimestamp());
        }else {
            return null;
        }
    }

    private BooleanExpression reservationType(String division, Long no) {
        if(division.equals("user")){
            return reservation.userNo.eq(no);
        }else if(division.equals("resource")){
            return reservation.resourceNo.eq(no);
        }else{
            return null;
        }
    }

//    private BooleanExpression dateType(String classification, int endTime){
//        if(classification.equals("start")){
//            return  timelist.timeNo.lt(endTime)
//        }
//    }

    @Override
    public List<ReservationManagementDto> getReservList(Long no, String classification, String division) throws ParseException {

        return (List<ReservationManagementDto>) jpaQueryFactory
                .select(new QReservationManagementDto(
                        reservation.reservNo,
                        reservation.able,
                        reservation.startTime,
                        reservation.endTime,
                        reservation.reservName,
                        reservation.resourceNo,
                        resource.resourceName,
                        reservation.createAt,
                        reservation.modifyAt,
                        category.cateName
                ))
                .from(reservation)
                .join(reservation.resource, resource)
                .join(reservation.user, employee)
                .join(reservation.resource.category, category)
                .where(
                        reservationType(division, no),
                        reservationClassification(classification)
                        )
                .orderBy(reservation.endTime.desc(), reservation.startTime.desc())
                .fetch();
    }

    @Override
    public void updateReservation(ReservationManagementDto reservationManagementDto) {
        JPAUpdateClause updateClause = new JPAUpdateClause(entityManager, reservation);

        updateClause
                .where(reservation.reservNo.eq(reservationManagementDto.getReservNo()))
                .set(reservation.reservName, reservationManagementDto.getReservName())
                .set(reservation.able, reservationManagementDto.getAble())
                .set(reservation.able, reservationManagementDto.getAble())
                .set(reservation.startTime, reservationManagementDto.getStartTime())
                .set(reservation.endTime, reservationManagementDto.getEndTime())
                .set(reservation.resourceNo, reservationManagementDto.getResourceNo())
                .set(reservation.userNo, reservationManagementDto.getUserNo())
                .set(reservation.modifyAt, LocalDateTime.now().plusHours(9L))
                .execute();
    }

    @Override
    public List<ReservationManagementDto> getReservationView(Long reservNo){

        return (List<ReservationManagementDto>) jpaQueryFactory
                .select(new QReservationManagementDto(
                        reservation.reservNo,
                        reservation.able,
                        category.cateName,
                        category.cateNo,
                        resource.resourceName,
                        reservation.resourceNo,
                        reservation.userNo,
                        employee.name.as("userName"),
                        reservation.startTime,
                        reservation.endTime,
                        resource.adminNo,
                        employee.name.as("adminName"),
                        resource.availableTime
                ))
                .from(reservation)
                .join(reservation.resource, resource)
                .join(reservation.user, employee)
                .join(resource.admin, employee)
                .join(reservation.resource.category, category)
                .where(reservation.reservNo.eq(reservNo))
                .fetch();
    }

    @Override
    public List<ReservationManagementDto> findByReservCheckdate(Long resourceNo, String checkdate, int startTime, int endTime, String classification) {
        System.out.println(checkdate);
        System.out.println(startTime);
        System.out.println(endTime);

        return (List<ReservationManagementDto>) jpaQueryFactory
                .select(new QReservationManagementDto(
                        reservationCheck.checkNo,
                        reservationCheck.resourceNo,
                        reservationCheck.checkDate,
                        reservationCheck.cateNo,
                        reservationCheck.reservNo,
                        timelist.timeNo
                ))
                .from(timelist)
                .join(timelist.check, reservationCheck)
                .join(reservationCheck.reserv, reservation)
                .where(reservation.able.eq("Y")
                        .and(reservationCheck.resourceNo.eq(resourceNo))
                        .and(reservationCheck.checkDate.eq(checkdate))
                        .and(timelist.timeNo.goe(startTime))
                        .and(timelist.timeNo.loe(endTime)))
                .fetch();
    }

    @Override
    public void deleteByReservNo(Long reservNo) {
        jpaQueryFactory
                .delete(reservationCheck)
                .where(reservationCheck.reservNo.eq(reservNo))
                .execute();
    }

    @Override
    public List<Long> findByCheckNo(Long reservNo){
        List<Long> checkNo =  jpaQueryFactory
                .select(reservationCheck.checkNo)
                .from(reservationCheck)
                .where(reservationCheck.reservNo.eq(reservNo))
                .fetch();
        return checkNo;
    }

    @Override
    public void deleteTimelistByCheckNo(Long checkNo){
        jpaQueryFactory
                .delete(timelist)
                .where(timelist.checkNo.eq(checkNo))
                .execute();
    }

}
