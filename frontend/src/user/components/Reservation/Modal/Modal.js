import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { getCookie } from '../../../utils/cookie.js';

import SearchIcon from '@material-ui/icons/Search';
// import { getCookie } from '../../utils/cookie';
import CancelIcon from '@material-ui/icons/Cancel';

import StyledList from '../../StyledList/StyledList.js';

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
} from '../Modal/style.js';

const Modal = (props) => {
  const count = props.count;
  const [keyword, setKeyword] = useState('');
  const [people, setPeople] = useState(null);
  const [peopleList, setPeopleList] = useState([]);
  const [checkList, setCheckList] = useState('');
  const [checkNameList, setCheckNameList] = useState([]);

  const searchIcon = useRef(null);

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchIcon.current.click();
    }
  };

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

  const onClose = async () => {
    await props.setOpenModal(false);
  };

  const onAdd = () => {
    if (count < checkList.length) {
      alert(
        '설정한 추가 인원보다 많은 사용자를 선택하였습니다.\n다시 선택해주세요.',
      );
    } else {
      props.setPeople(people);
      props.setPeopleNo(checkList);
      onClose();
    }
  };

  return (
    <BackgroundContainer>
      <ModalContainer>
        <ModalHeader>
          <SearchContainer>
            <SearchInput
              type="text"
              onChange={handleChange}
              onKeyPress={onKeyPress}
              autoFocus={true}
            />
            <SearchButton onClick={onSearch} ref={searchIcon}>
              <SearchIcon />
            </SearchButton>
          </SearchContainer>
        </ModalHeader>
        <ModalBody>
          <StyledList
            peopleList={peopleList}
            setCheckList={setCheckList}
            setCheckNameList={setPeople}
          ></StyledList>
        </ModalBody>
        <ModalButtonContainer>
          <ModaldButton onClick={onClose}>닫기</ModaldButton>
          <ModaldButton onClick={onAdd}>추가</ModaldButton>
        </ModalButtonContainer>
      </ModalContainer>
    </BackgroundContainer>
  );
};

export default Modal;
