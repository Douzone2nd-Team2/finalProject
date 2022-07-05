import {
  FlexContainer,
  DateTimeLeftContainer,
  DateTimeRightContainer,
  DateTimeTitle,
  DateTimeInfo,
} from './style.js';

const DateTime = () => {
  return (
    <FlexContainer>
      <DateTimeLeftContainer>
        <DateTimeTitle>시작일</DateTimeTitle>
        <DateTimeInfo>2999.12.31 00:00:00</DateTimeInfo>
      </DateTimeLeftContainer>
      <DateTimeRightContainer>
        <DateTimeTitle>종료일</DateTimeTitle>
        <DateTimeInfo>2999.12.31 00:00:00</DateTimeInfo>
      </DateTimeRightContainer>
    </FlexContainer>
  );
};

export default DateTime;
