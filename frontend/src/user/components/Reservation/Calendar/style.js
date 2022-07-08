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
  overflow: hidden;
`;

const CalendarTest = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CalendarDetatil = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 24px;
  display: flex;
  align-items: center;
`;

const DateTimeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DateTimeTitle = styled.div`
  width: 100%;
  position: relative;
  top: 12px px;
  left: 12px;
  right: 12px;
  margin: 0px;
  padding: 0px;
  pointer-events: none;
  font-size: 12px;
  line-height: 12px;
  color: rgb(34, 34, 34);
  text-transform: uppercase;
  font-weight: 800;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DateTimeDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0px;
`;

const DateSpan = styled.div`
  width: 200px;
  height: 42px;
  margin: 3px;
  padding: 2px 12px;
  font-size: 18px;
  font-weight: 400;
  line-height: 36px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;

const TimeSelect = styled.select`
  width: 200px;
  height: 42px;
  margin: 3px 3px 3px 12px;
  padding: 8px 12px;
  font-size: 18px;
  font-weight: 400;
  line-height: 36px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;

const TimeOption = styled.option``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  min-height: 32px;
  padding-top: 24px;
`;
const ReserveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  min-height: 36px;
  margin: 3px;
  padding: 8px;
  cursor: pointer;
  touch-action: manipulation;
  background: #1296ec;
  color: #f1f1f1;
  font-weight: 600;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 16px;
`;

const QuantityContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 24px;
  display: flex;
  align-items: center;
`;

const RestDiv = styled.div`
  position: relative;
  flex: 1 1 0%;
  padding: 0px 0px 4px;
  overflow: hidden;
  border-right: 1px solid rgb(176, 176, 176);
  display: flex;
`;

const RestTitle = styled.span`
  width: 100%;
  position: relative;
  top: 12px px;
  left: 12px;
  right: 12px;
  margin: 0px;
  padding: 0px;
  pointer-events: none;
  font-size: 12px;
  line-height: 12px;
  color: rgb(34, 34, 34);
  text-transform: uppercase;
  font-weight: 800;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RestSpan = styled.span`
  width: 100%;
  height: 100%;
  margin: 3px;
  padding: 4px 12px;
  font-size: 18px;
  font-weight: 400;
`;

const QuantityDiv = styled.div`
  position: relative;
  flex: 1 1 0%;
  padding: 0px 0px 4px;
  overflow: hidden;
  margin-left: 30px;
  display: flex;
`;

const QuantityTitle = styled.span`
  width: 100%;
  position: relative;
  top: 12px px;
  left: 12px;
  right: 12px;
  margin: 0px;
  padding: 0px;
  pointer-events: none;
  font-size: 12px;
  line-height: 12px;
  color: rgb(34, 34, 34);
  text-transform: uppercase;
  font-weight: 800;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const QuantityInput = styled.input`
  width: 100%;
  height: 100%;
  margin: 3px;
  padding: 4px 12px;
  font-size: 18px;
  font-weight: 400;
  line-height: 36px;
  outline: none;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  text-align: center;
`;

export {
  CalendarContainer,
  CalendarTest,
  CalendarDetatil,
  DateTimeContainer,
  DateTimeDiv,
  DateTimeTitle,
  DateSpan,
  TimeSelect,
  TimeOption,
  ButtonContainer,
  ReserveButton,
  QuantityContainer,
  RestDiv,
  RestTitle,
  RestSpan,
  QuantityDiv,
  QuantityTitle,
  QuantityInput,
};
