import {
  CalendarContainer,
  CalendarTest,
  CalendarDetatilTest,
  DateTimeContainer,
  DateTimeTitle,
  DateTimeDiv,
  DateSpan,
  TimeSpan,
  ButtonContainer,
  ReserveButton,
  QuantityContainer,
  RestDiv,
  RestTitle,
  RestSpan,
  QuantityDiv,
  QuantityTitle,
  QuantityInput,
} from './style.js';

const CalendarInfo = () => {
  return (
    <CalendarContainer>
      <CalendarTest></CalendarTest>
      <CalendarDetatilTest>
        <DateTimeContainer>
          <DateTimeTitle>시작일</DateTimeTitle>
          <DateTimeDiv>
            <DateSpan>2022.01.01</DateSpan>
            <TimeSpan>00:00:00</TimeSpan>
          </DateTimeDiv>
          <DateTimeTitle>종료일</DateTimeTitle>
          <DateTimeDiv>
            <DateSpan>2022.01.01</DateSpan>
            <TimeSpan>01:00:00</TimeSpan>
          </DateTimeDiv>
        </DateTimeContainer>
      </CalendarDetatilTest>
      {/* <QuantityContainer> 얘네는 노트북만
        <RestDiv>
          <RestTitle>잔여 개수</RestTitle>
          <RestSpan>0</RestSpan>
        </RestDiv>
        <QuantityDiv>
          <QuantityTitle>선택 개수</QuantityTitle>
          <QuantityInput></QuantityInput>
        </QuantityDiv>
      </QuantityContainer> */}
      <ButtonContainer>
        <ReserveButton>다음</ReserveButton>
      </ButtonContainer>
    </CalendarContainer>
  );
};

export default CalendarInfo;
