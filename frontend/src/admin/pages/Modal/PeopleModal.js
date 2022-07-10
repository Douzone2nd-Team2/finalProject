import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { getCookie } from '../../utils/cookie';

import SearchIcon from '@material-ui/icons/Search';
// import { getCookie } from '../../utils/cookie';
import CancelIcon from '@material-ui/icons/Cancel';

import PeopleStyledList from './PeopleStyledList';

import {
  BackgroundContainer,
  ModalContainer,
  ModalHeader,
  SearchContainer,
  SearchInput,
  SearchButton,
  ModalBody,
  ModalButtonContainer,
  ModaldButton,
} from './style.js';

const PeopleModal = (props) => {
  const count = props.count;
  const [userNo, setUserNo] = useState('');
  const [userName, setUserName] = useState('');
  const [keyword, setKeyword] = useState('');
  const [people, setPeople] = useState(null);
  const [peopleList, setPeopleList] = useState([]);
  const [close, setClose] = useState(false);

  const searchPeople = async () => {
    const data = {
      keyword: keyword,
    };

    const searchResult = await axios
      .post(`${process.env.REACT_APP_SERVER_PORT}/searchPeople`, data, {
        headers: {
          Authorization: getCookie('accessToken'),
        },
      })
      .then((res) => {
        if (res.data.resCode === 4001) {
          console.log('[Axios SearchPeople] 알 수 없는 오류가 발생했습니다.');
          return;
        } else {
          return res.data.data;
        }
      })
      .catch(console.error);

    setPeopleList(searchResult);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const onSearch = () => {
    searchPeople();
  };

  const onClose = () => {
    props.setOpenModal2(false);
    props.setUserNo(userNo);
    props.setUserName(userName);
  };

  if (close) {
    onClose();
  }

  return (
    <BackgroundContainer>
      <ModalContainer>
        <ModalHeader>
          <SearchContainer>
            <SearchInput type="text" onChange={handleChange}></SearchInput>
            <SearchButton onClick={onSearch}>
              <SearchIcon></SearchIcon>
            </SearchButton>
          </SearchContainer>
        </ModalHeader>
        <ModalBody>
          <PeopleStyledList
            peopleList={peopleList}
            setUserNo={setUserNo}
            setUserName={setUserName}
            setClose={setClose}
          ></PeopleStyledList>
        </ModalBody>
        <ModalButtonContainer>
          <ModaldButton onClick={onClose}>닫기</ModaldButton>
          {/* <ModaldButton>추가</ModaldButton> */}
        </ModalButtonContainer>
      </ModalContainer>
    </BackgroundContainer>
  );
};

export default PeopleModal;
