import { React, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {
  CalendarContainer,
  CalendarTest,
  CalendarDetatil,
  DateTimeContainer,
  DateTimeTitle,
  DateTimeDiv,
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
} from './style.js';

import TimeList from './TimeList.js';

const CalendarInfo = (props) => {
  const onNextStep = () => {
    if (selectedStartDate && selectedEndDate && startTime < endTime) {
      props.setStep(1);
    }
  };

  const [timeList, setTimeList] = useState(TimeList);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const onDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    start && setSelectedStartDate(start.toLocaleDateString());
    end && setSelectedEndDate(end.toLocaleDateString());
  };

  const handleStartTime = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTime = (e) => {
    setEndTime(e.target.value);
  };

  const clearEndDate = useEffect(() => {
    setSelectedEndDate('');
  }, [startDate]);

  return (
    <CalendarContainer>
      <CalendarTest>
        <DatePicker
          onChange={onDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          selectsDisabledDaysInRange
          inline
        />
      </CalendarTest>
      <CalendarDetatil>
        <DateTimeContainer>
          <DateTimeTitle>시작일</DateTimeTitle>
          <DateTimeDiv>
            <DateSpan>{selectedStartDate}</DateSpan>
            <TimeSelect onChange={handleStartTime}>
              {timeList.map((item) => (
                <TimeOption key={item.timeNo} value={item.value}>
                  {item.value}
                </TimeOption>
              ))}
            </TimeSelect>
          </DateTimeDiv>
          <DateTimeTitle>종료일</DateTimeTitle>
          <DateTimeDiv>
            <DateSpan>{selectedEndDate}</DateSpan>
            <TimeSelect onChange={handleEndTime}>
              {timeList.map((item) => (
                <TimeOption key={item.timeNo} value={item.value}>
                  {item.value}
                </TimeOption>
              ))}
            </TimeSelect>
          </DateTimeDiv>
        </DateTimeContainer>
      </CalendarDetatil>
      {props.cateNo === 3 ? (
        <QuantityContainer>
          <RestDiv>
            <RestTitle>잔여 개수</RestTitle>
            <RestSpan>0</RestSpan>
          </RestDiv>
          <QuantityDiv>
            <QuantityTitle>선택 개수</QuantityTitle>
            <QuantityInput></QuantityInput>
          </QuantityDiv>
        </QuantityContainer>
      ) : null}

      <ButtonContainer>
        <ReserveButton onClick={onNextStep}>다음</ReserveButton>
      </ButtonContainer>
    </CalendarContainer>
  );
};

export default CalendarInfo;
