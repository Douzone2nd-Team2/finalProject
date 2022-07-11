import { React, useEffect, useState } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { reservationState } from '../../../recoil/reservation.js';

import {
  AdditionalInfoContainer,
  ButtonContainer,
  ReserveButton,
} from './style.js';
import DateTime from './DateTime/DateTime.js';
import UserInfo from './UserInfo/UserInfo.js';
import Count from './Count/Count.js';

const AdditionalInfo = (props) => {
  const reservation = useRecoilValue(reservationState);
  const setReservationState = useSetRecoilState(reservationState);
  const [reservName, setReservName] = useState('');
  const [peopleCnt, setPeopleCnt] = useState([]);

  const onNextStep = () => {
    setReservationState({
      ...reservation,
      reservName: reservName,
    });
    console.log(reservation);
  };

  const onPreviousStep = () => {
    props.setStep(0);
  };

  return (
    <AdditionalInfoContainer>
      <DateTime></DateTime>
      <UserInfo setReservName={setReservName}></UserInfo>
      {props.cateNo === 1 ? <Count></Count> : null}
      <ButtonContainer>
        <ReserveButton onClick={onPreviousStep}>이전</ReserveButton>
        <ReserveButton onClick={onNextStep}>예약</ReserveButton>
      </ButtonContainer>
    </AdditionalInfoContainer>
  );
};

export default AdditionalInfo;
