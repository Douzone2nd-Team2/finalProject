import { React, useState } from 'react';

import { ReservationDetail } from './style.js';
import DateTime from '../Reservation/AdditionalInfo/DateTime/DateTime.js';
import {
  FlexContainer,
  UserInfoContainer,
  UserInfoTitle,
  UserInfoDetail,
  DateContainer,
  DateTimeLeftContainer,
  DateTimeRightContainer,
  DateTimeTitle,
  DateTimeInfo,
} from '../../components/MyReservationStyle.js';
import { useEffect } from 'react';

const MyReservationDetail = (props) => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const parseTime = useEffect(() => {
    setStartTime(props.data.startTime.slice(0, 19).replace(/T/, ' '));
    setEndTime(props.data.endTime.slice(0, 19).replace(/T/, ' '));
  }, []);
  return (
    <ReservationDetail>
      <FlexContainer>
        <UserInfoContainer>
          <UserInfoTitle>예약번호</UserInfoTitle>
          <UserInfoDetail>{props.data.reservNo}</UserInfoDetail>
        </UserInfoContainer>
      </FlexContainer>
      <DateContainer>
        <DateTimeLeftContainer>
          <DateTimeTitle>시작일</DateTimeTitle>
          <DateTimeInfo>{startTime}</DateTimeInfo>
        </DateTimeLeftContainer>
        <DateTimeRightContainer>
          <DateTimeTitle>종료일</DateTimeTitle>
          <DateTimeInfo>{endTime}</DateTimeInfo>
        </DateTimeRightContainer>
      </DateContainer>
      <FlexContainer>
        <UserInfoContainer>
          <UserInfoTitle>예약자</UserInfoTitle>
          <UserInfoDetail>{props.data.name}</UserInfoDetail>
        </UserInfoContainer>
      </FlexContainer>
      <FlexContainer>
        <UserInfoContainer>
          <UserInfoTitle>예약명</UserInfoTitle>
          <UserInfoDetail>{props.data.reservName}</UserInfoDetail>
        </UserInfoContainer>
      </FlexContainer>
      <FlexContainer>
        <UserInfoContainer>
          {props.data.cateNo === 1 ? (
            <UserInfoTitle>인원</UserInfoTitle>
          ) : (
            <UserInfoTitle>개수</UserInfoTitle>
          )}
          <UserInfoDetail>{props.data.people}</UserInfoDetail>
        </UserInfoContainer>
      </FlexContainer>
    </ReservationDetail>
  );
};

export default MyReservationDetail;
