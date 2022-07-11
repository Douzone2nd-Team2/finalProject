import { React, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getCookie } from '../../../utils/cookie';
import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from '../../../recoil/user.js';
import { timelistState } from '../../../recoil/timelist.js';
import { reservationState } from '../../../recoil/reservation.js';

import { sendMessage } from '../../../utils/socket.js';

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

  const serverTimelist = useRecoilValue(timelistState);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [startTime, setStartTime] = useState('00:00:00');
  const [endTime, setEndTime] = useState('00:00:00');
  const [dropdownDisable, setDropdownDisable] = useState(true);

  // const tempReservation = () => {
  //   let chatMessage = {
  //     senderName: user.no,
  //     data: {
  //       ...reservation,
  //       startTime: startDate.getTime(),
  //       endTime: endDate.getTime(),
  //     },
  //   };
  //   sendMessage('/app/check', chatMessage);
  // };

  const onDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    end && setEndDate(end);
    if (start && end) {
      setSelectedStartDate(start.toLocaleDateString());
      setSelectedEndDate(end.toLocaleDateString());
      setDropdownDisable(false);
    }
  };

  const axiosGetTimelist = async () => {
    const data = {
      resourceNo: props.resourceNo,
      startDate: startDate,
      endDate: endDate,
    };

    const result = await axios
      .post(`${process.env.REACT_APP_SERVER_PORT}/timelist`, data, {
        headers: {
          Authorization: getCookie('accessToken'),
        },
      })
      .then((res) => {
        if (res.data.resCode === 4001) {
          console.log('[Axios SearchPeople] 알 수 없는 오류가 발생했습니다.');
          return;
        } else {
          console.log(res.data);
          return res.data.data;
        }
      })
      .catch(console.error);
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
      props.setStep(1);
    } else {
      alert('올바른 날짜와 시간을 선택해주세요.');
      return;
    }
    console.log(reservation);
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

  useEffect(() => {
    if (startDate && endDate) {
      axiosGetTimelist();
      setReservationState({
        ...reservation,
        startDate: startDate,
        endDate: endDate,
        startTime: selectedStartDate,
        endTime: selectedEndDate,
      });
    }
  }, [selectedEndDate]);

  // const getTimelist = () => {
  //   if (startDate && endDate) {
  //     let chatMessage = {
  //       senderName: user.no,
  //       data: {
  //         resourceNo: props.resourceNo,
  //         startTime: startDate.getTime(),
  //         endTime: endDate.getTime(),
  //       },
  //     };
  //     sendMessage('/app/timelist', chatMessage);
  //     setDropdownDisable(false);
  //   } else {
  //     alert('시작일과 종료일을 선택해주세요.');
  //   }
  // };

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
            <TimeSelect onChange={handleStartTime} disabled={dropdownDisable}>
              {TimeList.map((item) => (
                <TimeOption key={item.timeNo} value={item.value}>
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
