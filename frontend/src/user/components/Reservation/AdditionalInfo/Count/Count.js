import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { reservationState } from '../../../../recoil/reservation.js';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import SearchIcon from '@material-ui/icons/Search';

import {
  FlexContainer,
  CountButtonContainer,
  CountButton,
  CountInfo,
  PeopleContainer,
  PeopleInput,
  PeopleSearchButton,
  PeopleGridContainer,
  PeopleNameTag,
  CountInfoTitle,
} from './style';

import Modal from '../../Modal/Modal.js';

const Count = (props) => {
  const reservation = useRecoilValue(reservationState);
  const setReservationState = useSetRecoilState(reservationState);
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [people, setPeople] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [peopleNo, setPeopleNo] = useState([]);

  const onIncrease = () => {
    setCount(count + 1 < props.max ? count + 1 : count);
  };

  const onDecrease = () => {
    setCount(count === 0 ? 0 : count - 1);
  };

  const onPeopleSearch = () => {
    setOpenModal(true);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    openModal
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  }, [openModal]);

  useEffect(() => {
    peopleNo &&
      setReservationState({
        ...reservation,
        peopleCnt: peopleNo,
      });
  }, [peopleNo]);

  return (
    <>
      {openModal ? (
        <Modal
          setOpenModal={setOpenModal}
          count={count}
          setPeople={setPeople}
          setPeopleNo={setPeopleNo}
        ></Modal>
      ) : null}
      <FlexContainer>
        <CountInfoTitle>추가 사용자</CountInfoTitle>
        <CountButtonContainer>
          <CountButton onClick={onDecrease}>
            <ArrowDownwardIcon></ArrowDownwardIcon>
          </CountButton>
          <CountInfo>{count}</CountInfo>
          <CountButton onClick={onIncrease}>
            <ArrowUpwardIcon></ArrowUpwardIcon>
          </CountButton>
        </CountButtonContainer>
        <PeopleContainer>
          <PeopleInput onChange={handleName}></PeopleInput>
          <PeopleSearchButton onClick={onPeopleSearch}>
            <SearchIcon></SearchIcon>
          </PeopleSearchButton>
        </PeopleContainer>
        <PeopleGridContainer>
          {people &&
            people.map((nameTag, index) => {
              return <PeopleNameTag key={index}>{nameTag}</PeopleNameTag>;
            })}
        </PeopleGridContainer>
      </FlexContainer>
    </>
  );
};

export default Count;
