import { React, useState, useEffect } from 'react';

import { getCookie } from '../utils/cookie';

import { useLocation } from 'react-router-dom';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { reservationState } from '../recoil/reservation';

import { userState } from '../recoil/user';

import { MainContainer, Container } from '../styles/ReservationLayout';

import ReservationHeader from '../components/Reservation/ReservationHeader/ReservationHeader';
import ResourceInfo from '../components/Reservation/ResourceInfo/ResourceInfo';
import AdditionalInfo from '../components/Reservation/AdditionalInfo/AdditionalInfo.js';
import CalendarInfo from '../components/Reservation/Calendar/CalendarInfo.js';
import axios from 'axios';

const Reserve = () => {
  const location = useLocation();
  const user = useRecoilValue(userState);
  const setReservationState = useSetRecoilState(reservationState); // 예약 정보 리코일
  const reservation = useRecoilValue(reservationState);
  const [resourceData, setResourceData] = useState(location.state);
  const [step, setStep] = useState(0);
  const [fileList, setFileList] = useState('');

  useEffect(() => {
    axiosGetReourceImages(resourceData.resourceNo);
  }, []);

  useEffect(() => {
    fileList &&
      setReservationState({
        userNo: user.no,
        resourceNo: resourceData.resourceNo,
        userName: user.name,
      });
  }, [fileList]);

  const axiosGetReourceImages = async (resourceNo) => {
    const result = await axios
      .get(
        `${process.env.REACT_APP_SERVER_PORT}/resource/detail?resourceNo=${resourceNo}`,
        { Authorization: getCookie('accessToken') },
      )
      .then((res) => {
        return res.data.data.fileList;
      })
      .catch((error) => {
        console.log(error);
      });
    setFileList(result);
  };

  return (
    <MainContainer>
      <ReservationHeader title="예약"></ReservationHeader>
      <Container>
        <ResourceInfo
          fileList={fileList}
          option={resourceData.option}
          content={resourceData.content}
          fuel={resourceData.fuel}
          info={resourceData.content}
          title={resourceData.resourceName}
        ></ResourceInfo>
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
            data={resourceData}
          ></AdditionalInfo>
        ) : null}
      </Container>
    </MainContainer>
  );
};

export default Reserve;
