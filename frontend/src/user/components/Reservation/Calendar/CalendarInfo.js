import { React, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getCookie } from '../../../utils/cookie';
import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from '../../../recoil/user.js';
import { reservationState } from '../../../recoil/reservation.js';

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
  const user = useRecoilValue(userState);
  const reservation = useRecoilValue(reservationState);
  const setReservationState = useSetRecoilState(reservationState); // 예약 정보 리코일

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [startTime, setStartTime] = useState('00:00:00');
  const [endTime, setEndTime] = useState('00:00:00');
  const [dropdownDisable, setDropdownDisable] = useState(true);
  const [noTimelist, setNoTimelist] = useState([]);

  const onDateChange = (dates) => {
    const [start, end] = dates;

    setStartDate(start);
    end && setEndDate(end);
    if (start && end && start <= end) {
      setSelectedStartDate(start.toLocaleDateString());
      setSelectedEndDate(end.toLocaleDateString());
    }
  };

  const axiosGetTimelist = async () => {
    const data = {
      resourceNo: props.resourceNo,
      startDate: startDate.getTime(),
      endDate: endDate.getTime(),
    };

    const result = await axios
      .post(`${process.env.REACT_APP_SERVER_PORT}/timelist`, data, {
        headers: {
          Authorization: getCookie('accessToken'),
        },
      })
      .then((res) => {
        if (res.data.resCode === 4001) {
          alert('알 수 없는 오류가 발생했습니다.');
          return;
        } else {
          setDropdownDisable(false);
          return res.data.data;
        }
      })
      .catch(console.error);
    result && setNoTimelist(result);
  };

  const onNextStep = () => {
    if (dropdownDisable) {
      alert('시간을 먼저 조회해주세요.');
      return;
    }
    if (
      (startDate.getTime() === endDate.getTime() && startTime < endTime) ||
      startDate.getTime() < endDate.getTime()
    ) {
      axiosSaveReservation();
    } else {
      alert('올바른 날짜와 시간을 선택해주세요.');
      return;
    }
  };

  const handleStartTime = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTime = (e) => {
    setEndTime(e.target.value);
  };

  const clearEndDate = useEffect(() => {
    setEndDate('');
    setSelectedEndDate('');
    setDropdownDisable(true);
  }, [startDate]);

  useEffect(() => {}, [selectedEndDate]);
  const axiosSaveReservation = async () => {
    const data = {
      able: 'N',
      userNo: user.no,
      resourceNo: props.resourceNo,
      ss:
        selectedStartDate.replaceAll(/\./g, '').replaceAll(/ /g, '-') +
        ' ' +
        startTime,
      ee:
        selectedEndDate.replaceAll(/\./g, '').replaceAll(/ /g, '-') +
        ' ' +
        endTime,
    };

    const result = await axios
      .post(`${process.env.REACT_APP_SERVER_PORT}/saveReservation`, data, {
        headers: {
          Authorization: getCookie('accessToken'),
        },
      })
      .then((res) => {
        if (res.data.resCode === 4001) {
          alert('이미 예약된 시간입니다. 다른 시간을 선택해주세요.');
          return;
        } else {
          setReservationState({
            ...reservation,
            startTime:
              selectedStartDate.replaceAll(/\./g, '').replaceAll(/ /g, '-') +
              ' ' +
              startTime,
            endTime:
              selectedEndDate.replaceAll(/\./g, '').replaceAll(/ /g, '-') +
              ' ' +
              endTime,
            reservNo: res.data.data,
          });
          props.setStep(1);
          return res.data;
        }
      })
      .catch(console.error);
  };

  useEffect(() => {}, [noTimelist]);

  return (
    <CalendarContainer>
      <CalendarTest>
        <DatePicker
          onChange={onDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          selectsDisabledDaysInRange
          minDate={new Date()}
          inline
        />
      </CalendarTest>
      <CalendarDetatil>
        <DateTimeContainer>
          <DateTimeTitle>시작일</DateTimeTitle>
          <DateTimeDiv>
            <DateSpan>{selectedStartDate}</DateSpan>
            <TimeSelect onChange={handleStartTime} disabled={dropdownDisable}>
              {TimeList.map((item) => (
                <TimeOption
                  key={item.timeNo}
                  value={item.value}
                  disabled={
                    noTimelist[0] && noTimelist[0].includes(item.timeNo)
                  }
                >
                  {item.value}
                </TimeOption>
              ))}
            </TimeSelect>
          </DateTimeDiv>
          <DateTimeTitle>종료일</DateTimeTitle>
          <DateTimeDiv>
            <DateSpan>{selectedEndDate}</DateSpan>
            <TimeSelect onChange={handleEndTime} disabled={dropdownDisable}>
              {TimeList.map((item) => (
                <TimeOption
                  key={item.timeNo}
                  value={item.value}
                  disabled={
                    noTimelist[1] && noTimelist[1].includes(item.timeNo)
                  }
                >
                  {item.value}
                </TimeOption>
              ))}
            </TimeSelect>
          </DateTimeDiv>
        </DateTimeContainer>
      </CalendarDetatil>
      <ButtonContainer>
        <ReserveButton onClick={axiosGetTimelist}>조회</ReserveButton>
        <ReserveButton onClick={onNextStep}>다음</ReserveButton>
      </ButtonContainer>
    </CalendarContainer>
  );
};

export default CalendarInfo;
