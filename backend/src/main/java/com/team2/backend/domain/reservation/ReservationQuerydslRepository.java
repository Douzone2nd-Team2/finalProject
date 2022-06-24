package com.team2.backend.domain.reservation;

import com.team2.backend.web.dto.admin.ReservationManagementDto;

import java.text.ParseException;
import java.util.List;

public interface ReservationQuerydslRepository {
    List<ReservationManagementDto> getReservList(Long userNo, String classification, String division) throws ParseException;
    void updateReservation(ReservationManagementDto reservationManagementDto);
    List<ReservationManagementDto> getReservationView(Long reservNo);
}
