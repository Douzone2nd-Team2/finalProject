import { React, useState } from 'react';

import { ReservationDetail } from './style.js';
import DateTime from '../Reservation/AdditionalInfo/DateTime/DateTime.js';
import {
  FlexContainer,
  UserInfoContainer,
  UserInfoTitle,
  UserInfoDetail,
} from '../Reservation/AdditionalInfo/UserInfo/style.js';

const MyReservationDetail = (props) => {
  return (
    <ReservationDetail>
      <FlexContainer>
        <UserInfoContainer>
          <UserInfoTitle>예약번호</UserInfoTitle>
          <UserInfoDetail>{props.data.reservNo}</UserInfoDetail>
        </UserInfoContainer>
      </FlexContainer>
      <DateTime></DateTime>
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
    </ReservationDetail>
  );
};

export default MyReservationDetail;
