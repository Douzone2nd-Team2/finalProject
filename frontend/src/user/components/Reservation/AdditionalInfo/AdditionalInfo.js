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
  const [reservName, setReservName] = useState('');
  const reservation = useRecoilValue(reservationState);
  const setReservationState = useSetRecoilState(reservationState);

  const onNextStep = () => {
    props.setStep(2);
  };

  const onPreviousStep = () => {
    props.setStep(0);
  };

  useEffect(() => {
    setReservationState({
      ...reservation,
      reservName: reservName,
    });
  }, [reservName]);

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
