import { React, useEffect, useState } from 'react';
import {
  FlexContainer,
  UserInfoContainer,
  UserInfoTitle,
  UserInfoDetail,
  UserInfoInput,
} from './style.js';

const UserInfo = () => {
  const [reservName, setReservName] = useState('');

  const onInputReservName = (e) => {
    setReservName(e.target.value);
  };

  useEffect(() => {
    console.log(reservName);
  }, [reservName]);

  return (
    <FlexContainer>
      <UserInfoContainer>
        <UserInfoTitle>예약자</UserInfoTitle>
        <UserInfoDetail>이정민</UserInfoDetail>
      </UserInfoContainer>
      <UserInfoContainer>
        <UserInfoTitle>예약명</UserInfoTitle>
        <UserInfoInput type="text" onChange={onInputReservName}></UserInfoInput>
      </UserInfoContainer>
    </FlexContainer>
  );
};

export default UserInfo;
