import { React, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { MainContainer, Container } from '../styles/MyReservation.js';
import { getCookie } from '../utils/cookie.js';

import ReservationHeader from '../components/Reservation/ReservationHeader/ReservationHeader';
import MyReservationDetail from '../components/MyReservationDetail/MyReservationDetail.js';
import MyReservationInfo from '../components/MyReservationInfo/MyReservationInfo.js';

import {
  ButtonContainer,
  ReserveButton,
} from '../components/Reservation/AdditionalInfo/style.js';

const MyReservation = () => {
  const location = useLocation();
  const [myReservationInfo, setMyReservationInfo] = useState(location.state);
  const navigate = useNavigate();

  const goToMyBook = () => {
    navigate('/mypage/mybook', {});
  };

  const cancelReservation = async () => {
    await axiosCancelResrevation(myReservationInfo.reservNo);
  };

  const axiosCancelResrevation = async (reservNo) => {
    const myReservationInfo = await axios
      .post(
        `${process.env.REACT_APP_SERVER_PORT}/cancel/reservation`,
        reservNo,
        {
          headers: {
            Authorization: getCookie('accessToken'),
            'Content-type': 'application/json',
          },
        },
      )
      .then((res) => {
        if (res.data.resCode === 4001) {
          alert('[ERROR] 알 수 없는 오류가 발생하였습니다.');
          return;
        } else {
          alert('성공적으로 취소되었습니다.');
          goToMyBook();
          return res.data.data;
        }
      })
      .catch(console.error);
  };

  return (
    <MainContainer>
      <ReservationHeader title="예약 정보"></ReservationHeader>
      <Container>
        <MyReservationDetail data={myReservationInfo}></MyReservationDetail>
        <MyReservationInfo data={myReservationInfo}></MyReservationInfo>
      </Container>
      <ButtonContainer>
        <ReserveButton onClick={goToMyBook}>목록으로</ReserveButton>
        <ReserveButton onClick={cancelReservation}>예약 취소</ReserveButton>
      </ButtonContainer>
    </MainContainer>
  );
};

export default MyReservation;
