import { React, useEffect, useState } from 'react';
import { connection, sendMessage, onSubscribe } from '../utils/socket.js';

import { getCookie } from '../utils/cookie';
import { useLocation } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from '../recoil/user';
import { timelistState } from '../recoil/timelist.js';
import { reservationState } from '../recoil/reservation.js';

import { MainContainer, Container } from '../styles/ReservationLayout';
import ReservationHeader from '../components/Reservation/ReservationHeader/ReservationHeader';
import ResourceInfo from '../components/Reservation/ResourceInfo/ResourceInfo';
import AdditionalInfo from '../components/Reservation/AdditionalInfo/AdditionalInfo.js';
import CalendarInfo from '../components/Reservation/Calendar/CalendarInfo.js';

const Reserve = () => {
  const location = useLocation();
  const user = useRecoilValue(userState);
  const setReservationState = useSetRecoilState(reservationState); // 예약 정보 리코일
  const setTimelistState = useSetRecoilState(timelistState);
  const reservation = useRecoilValue(reservationState);
  const [resourceData, setResourceData] = useState(location.state);
  const [step, setStep] = useState(0);
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [selectedStartTime, setSelectedStartTime] = useState('');
  const [selectedEndTime, setSelectedEndTime] = useState('');

  useEffect(() => {
    setReservationState({
      userNo: user.no,
      resourceNo: resourceData.resourceNo,
      userName: user.name,
    });
  }, []);

  // const connectToStomp = useEffect(() => {
  //   connection();
  //   onSubscribe(user.no, onMessageReceived);

  // }, []);

  // const onMessageReceived = (payload) => {
  //   const body = JSON.parse(payload.body);
  //   const status = body.status;
  //   const data = body.data;
  //   console.log(data);

  // switch (status) {
  //   case 'TIMELIST':
  //     setTimelistState(data);
  //     break;
  //   case 'FIRST_RESERV':
  //     console.log(data);
  //     break;
  // }
  // };

  return (
    <MainContainer>
      <ReservationHeader title={resourceData.resourceName}></ReservationHeader>
      <Container>
        <ResourceInfo option={resourceData.option}></ResourceInfo>
        {step === 0 ? (
          <CalendarInfo
            setStep={setStep}
            cateNo={resourceData.cateNo}
            username={user.name}
            resourceNo={resourceData.resourceNo}
          ></CalendarInfo>
        ) : step === 1 ? (
          <AdditionalInfo
            setStep={setStep}
            cateNo={resourceData.cateNo}
          ></AdditionalInfo>
        ) : null}
      </Container>
    </MainContainer>
  );
};

export default Reserve;
