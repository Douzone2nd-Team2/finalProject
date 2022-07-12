import { React, useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { reservationState } from '../../../../recoil/reservation.js';

import {
  FlexContainer,
  UserInfoContainer,
  UserInfoTitle,
  UserInfoDetail,
  UserInfoInput,
} from './style.js';

const UserInfo = (props) => {
  const reservation = useRecoilValue(reservationState);

  const handleReservName = (e) => {
    props.setReservName(e.target.value);
  };

  return (
    <FlexContainer>
      <UserInfoContainer>
        <UserInfoTitle>예약자</UserInfoTitle>
        <UserInfoDetail>{reservation.userName}</UserInfoDetail>
      </UserInfoContainer>
      <UserInfoContainer>
        <UserInfoTitle>예약명</UserInfoTitle>
        <UserInfoInput type="text" onChange={handleReservName}></UserInfoInput>
      </UserInfoContainer>
    </FlexContainer>
  );
};

export default UserInfo;
