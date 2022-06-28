package com.team2.backend.domain.reservation;

import com.team2.backend.web.dto.admin.QReservationManagementDto;
import com.team2.backend.web.dto.admin.ReservationManagementDto;
import org.springframework.data.jpa.repository.Query;

import java.text.ParseException;
import java.util.List;

public interface ReservationQuerydslRepository {
    List<ReservationManagementDto> getReservList(Long userNo, String classification, String division) throws ParseException;
    void updateReservation(ReservationManagementDto reservationManagementDto);
    List<ReservationManagementDto> getReservationView(Long reservNo);
    List<ReservationManagementDto> findByReservCheckdate(Long resourceNo, String checkdate, int startTime, int endTime, String classification);
    void deleteByReservNo(Long reservNo); //reservation_check에서 삭제
    List<Long> findByCheckNo(Long reservNo);
    void deleteTimelistByCheckNo(Long checkNo);
}
