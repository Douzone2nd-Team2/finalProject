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
      <ButtonContainer>
        <ReserveButton>다음</ReserveButton>
      </ButtonContainer>
    </CalendarContainer>
  );
};

export default CalendarInfo;
