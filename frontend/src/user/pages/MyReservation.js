import { React, useState } from 'react';

import { MainContainer, Container } from '../styles/MyReservation.js';

import ReservationHeader from '../components/Reservation/ReservationHeader/ReservationHeader';
import MyReservationDetail from '../components/MyReservationDetail/MyReservationDetail.js';
import MyReservationInfo from '../components/MyReservationInfo/MyReservationInfo.js';

const MyReservation = () => {
  const [step, setStep] = useState(0);
  const [cateNo, setCateNo] = useState(1);

  return (
    <MainContainer>
      <ReservationHeader title="예약 정보"></ReservationHeader>
      <Container>
        <MyReservationDetail></MyReservationDetail>
        <MyReservationInfo></MyReservationInfo>
      </Container>
    </MainContainer>
  );
};

export default MyReservation;
