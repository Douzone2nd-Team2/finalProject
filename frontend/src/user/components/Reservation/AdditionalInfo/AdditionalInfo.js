import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { reservationState } from '../../../recoil/reservation.js';
import { getCookie } from '../../../utils/cookie.js';
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
    axiosAddInfo();
  };

  const onPreviousStep = () => {
    props.setStep(0);
  };

  const axiosAddInfo = async () => {
    const data = {
      reservNo: reservation.reservNo,
      able: 'Y',
      reservName: reservName,
      peopleCnt: reservation.peopleCnt,
      resourceNo: reservation.resourceNo,
    };

    console.log(data);

    const result = await axios
      .post(`${process.env.REACT_APP_SERVER_PORT}/addReservationInfo`, data, {
        headers: {
          Authorization: getCookie('accessToken'),
        },
      })
      .then((res) => {
        if (res.data.resCode === 4001) {
          console.log(
            '[Axios Save Reservation Error] 알 수 없는 오류가 발생했습니다.',
          );
          console.log(res.data);
          return;
        } else {
          setReservationState({
            ...reservation,
            reservName: reservName,
          });
          console.log(reservation);

          props.setStep(0); // 네비게이션으로 빼자
          return res.data;
        }
      })
      .catch(console.error);

    console.log(result);
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
