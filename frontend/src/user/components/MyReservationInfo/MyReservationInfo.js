import { React, useState, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { reservationState } from '../../recoil/reservation.js';

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

import Option from '../Reservation/ResourceInfo/ResourceOption/Option.js';

import {
  FlexContainer,
  UserInfoContainer,
  UserInfoTitle,
  UserInfoDetail,
} from '../Reservation/AdditionalInfo/UserInfo/style.js';

const MyReservationInfo = (props) => {
  const [values, setValues] = useState([]);
  useEffect(() => {
    const value = props.data.option.split(', ');
    setValues(value);
  }, []);

  return (
    <ReservationInfo>
      <ThumbnailContainer>
        <Thumbnail src={props.data.imageUrl}></Thumbnail>
        <ThumnailInfo>
          <NameCateDiv>
            {props.data.cateNo === 1 ? (
              <ResourceCate>회의실</ResourceCate>
            ) : props.data.cateNo === 2 ? (
              <ResourceCate>차량</ResourceCate>
            ) : props.data.cateNo === 2 ? (
              <ResourceCate>노트북</ResourceCate>
            ) : null}
            <ResourceName>{props.data.resourceName}</ResourceName>
          </NameCateDiv>
          <LocationDiv>
            <ResourceLocation>{props.data.location}</ResourceLocation>
          </LocationDiv>
        </ThumnailInfo>
      </ThumbnailContainer>
      <FlexContainer>
        <UserInfoContainer>
          {values &&
            values.map((value) => <Option key={value} value={value}></Option>)}
        </UserInfoContainer>
        <UserInfoContainer>
          {props.data.fuel && (
            <Option key={props.data.fuel} value={props.data.fuel}></Option>
          )}
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
    </ReservationInfo>
  );
};

export default MyReservationInfo;
