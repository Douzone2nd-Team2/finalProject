import { useRecoilValue, useSetRecoilState } from 'recoil';
import { reservationState } from '../../../../recoil/reservation.js';
import { useState } from 'react';

import {
  FlexContainer,
  DateTimeLeftContainer,
  DateTimeRightContainer,
  DateTimeTitle,
  DateTimeInfo,
} from './style.js';

const DateTime = () => {
  const reservation = useRecoilValue(reservationState);

  return (
    <FlexContainer>
      <DateTimeLeftContainer>
        <DateTimeTitle>시작일</DateTimeTitle>
        <DateTimeInfo>{reservation.startTime}</DateTimeInfo>
      </DateTimeLeftContainer>
      <DateTimeRightContainer>
        <DateTimeTitle>종료일</DateTimeTitle>
        <DateTimeInfo>{reservation.endTime}</DateTimeInfo>
      </DateTimeRightContainer>
    </FlexContainer>
  );
};

export default DateTime;
