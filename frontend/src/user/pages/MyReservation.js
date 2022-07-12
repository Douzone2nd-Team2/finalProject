import { React, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MainContainer, Container } from '../styles/MyReservation.js';

import ReservationHeader from '../components/Reservation/ReservationHeader/ReservationHeader';
import MyReservationDetail from '../components/MyReservationDetail/MyReservationDetail.js';
import MyReservationInfo from '../components/MyReservationInfo/MyReservationInfo.js';

const MyReservation = () => {
  const location = useLocation();
  const [myReservationIngo, setMyReservationInfo] = useState(location.state);

  return (
    <MainContainer>
      <ReservationHeader title="예약 정보"></ReservationHeader>
      <Container>
        <MyReservationDetail data={myReservationIngo}></MyReservationDetail>
        <MyReservationInfo data={myReservationIngo}></MyReservationInfo>
      </Container>
    </MainContainer>
  );
};

export default MyReservation;
