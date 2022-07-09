import { React, useState } from 'react';

import { useLocation } from 'react-router-dom';

import { useRecoilValue } from 'recoil';

import { userState } from '../recoil/user';

import { MainContainer, Container } from '../styles/ReservationLayout';

import ReservationHeader from '../components/Reservation/ReservationHeader/ReservationHeader';
import ResourceInfo from '../components/Reservation/ResourceInfo/ResourceInfo';
import AdditionalInfo from '../components/Reservation/AdditionalInfo/AdditionalInfo.js';
import CalendarInfo from '../components/Reservation/Calendar/CalendarInfo.js';

const Reserve = () => {
  const user = useRecoilValue(userState);
  const resourceData = useLocation();

  console.log(user);
  console.log(resourceData.state);

  const [step, setStep] = useState(0);
  const [cateNo, setCateNo] = useState(1); // 바뀔 일 없으니까 구조분해할당으로 하자

  return (
    <MainContainer>
      <ReservationHeader title="자원 이름"></ReservationHeader>
      <Container>
        <ResourceInfo></ResourceInfo>
        {step === 0 ? (
          <CalendarInfo setStep={setStep} cateNo={cateNo}></CalendarInfo>
        ) : step === 1 ? (
          <AdditionalInfo setStep={setStep} cateNo={cateNo}></AdditionalInfo>
        ) : null}
      </Container>
    </MainContainer>
  );
};

export default Reserve;
