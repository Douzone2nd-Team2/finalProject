import styled from 'styled-components';

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  width: 100%;
  height: 100%;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  margin: 0px 0px 0px 80px;
`;

const CalendarTest = styled.div`
  width: 100%;
  height: 400px;
  background-color: skyblue;
  position: relative;
`;

const CalendarDetatilTest = styled.div`
  width: 100%;
  height: 200px;
  background-color: white;
  position: relative;
  padding-top: 24px;
`;

const DateTimeContainer = styled.di;

export { CalendarContainer, CalendarTest, CalendarDetatilTest };
