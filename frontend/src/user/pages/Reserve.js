import { React, useState } from 'react';

import { MainContainer, Container } from '../styles/ReservationLayout';

import ReservationHeader from '../components/Reservation/ReservationHeader/ReservationHeader';
import ResourceInfo from '../components/Reservation/ResourceInfo/ResourceInfo';
import AdditionalInfo from '../components/Reservation/AdditionalInfo/AdditionalInfo.js';
import CalendarInfo from '../components/Reservation/Calendar/CalendarInfo.js';

const Reserve = () => {
  const [step, setStep] = useState(0);
  const [cateNo, setCateNo] = useState(3);

  return (
    <MainContainer>
      <ReservationHeader></ReservationHeader>
      <Container>
        <ResourceInfo></ResourceInfo>
        {step === 0 ? (
          <CalendarInfo callback={setStep} cateNo={cateNo}></CalendarInfo>
        ) : step === 1 ? (
          <AdditionalInfo callback={setStep} cateNo={cateNo}></AdditionalInfo>
        ) : null}
      </Container>
    </MainContainer>
  );
};

export default Reserve;
