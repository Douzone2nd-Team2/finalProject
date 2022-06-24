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

    @Override
    public List<ReservationManagementDto> getReservList(Long userNo, String classification) throws ParseException {

        return (List<ReservationManagementDto>) jpaQueryFactory
                .select(new QReservationManagementDto(
                        reservation.reservNo,
                        reservation.able,
                        reservation.startTime,
                        reservation.endTime,
                        reservation.reservName,
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
                        reservation.userNo.eq(userNo),
                        reservationClassification(classification)
                        )
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
}
