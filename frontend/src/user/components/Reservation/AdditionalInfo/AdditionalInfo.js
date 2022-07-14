import { React, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
  const navigate = useNavigate();
  const reservation = useRecoilValue(reservationState);
  const setReservationState = useSetRecoilState(reservationState);
  const [reservName, setReservName] = useState('');
  const [peopleCnt, setPeopleCnt] = useState([]);

  const { cateNo } = props.data;

  const onNextStep = async () => {
    await axiosAddInfo();
    await axiosGetMyReservationInfo(reservation.reservNo);
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

    const reservNo = await axios
      .post(`${process.env.REACT_APP_SERVER_PORT}/addReservationInfo`, data, {
        headers: {
          Authorization: getCookie('accessToken'),
        },
      })
      .then((res) => {
        if (res.data.resCode === 4001) {
          alert('알 수 없는 오류가 발생하였습니다.');
          return;
        } else {
          alert('예약이 완료되었습니다.');
          return res.data.data.reservNo;
        }
      })
      .catch(console.error);
  };

  const axiosGetMyReservationInfo = async (reservNo) => {
    const myReservationInfo = await axios
      .post(
        `${process.env.REACT_APP_SERVER_PORT}/mypage/getMyReservationInfo`,
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
          console.log(res.data);
          return;
        } else {
          navigate('/mypage/reservation', {
            state: res.data.data,
          });
          return res.data.data;
        }
      })
      .catch(console.error);
  };

  return (
    <AdditionalInfoContainer>
      <DateTime></DateTime>
      <UserInfo setReservName={setReservName}></UserInfo>
      {cateNo === 1 ? <Count max={props.data.people}></Count> : null}
      <ButtonContainer>
        <ReserveButton onClick={onPreviousStep}>이전</ReserveButton>
        <ReserveButton onClick={onNextStep}>예약</ReserveButton>
      </ButtonContainer>
    </AdditionalInfoContainer>
  );
};

export default AdditionalInfo;
