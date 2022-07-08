import { React, useState } from 'react';

import {
  ReservationInfo,
  ThumbnailContainer,
  Thumbnail,
  ThumnailInfo,
  NameCateDiv,
  ResourceCate,
  ResourceName,
  LocationDiv,
  ResourceLocation,
} from './style.js';

import {
  FlexContainer,
  UserInfoContainer,
  UserInfoTitle,
  UserInfoDetail,
} from '../Reservation/AdditionalInfo/UserInfo/style.js';

const MyReservationInfo = () => {
  return (
    <ReservationInfo>
      <ThumbnailContainer>
        <Thumbnail></Thumbnail>
        <ThumnailInfo>
          <NameCateDiv>
            <ResourceCate>회의실</ResourceCate>
            <ResourceName>회의실1</ResourceName>
          </NameCateDiv>
          <LocationDiv>
            <ResourceLocation>12층</ResourceLocation>
          </LocationDiv>
        </ThumnailInfo>
      </ThumbnailContainer>
      <FlexContainer>
        <UserInfoContainer>
          <UserInfoTitle>옵션</UserInfoTitle>
          <UserInfoDetail>빔프로젝터</UserInfoDetail>
        </UserInfoContainer>
      </FlexContainer>
      <FlexContainer>
        <UserInfoContainer>
          <UserInfoTitle>인원 / 개수</UserInfoTitle>
          <UserInfoDetail>1</UserInfoDetail>
        </UserInfoContainer>
      </FlexContainer>
    </ReservationInfo>
  );
};

export default MyReservationInfo;
