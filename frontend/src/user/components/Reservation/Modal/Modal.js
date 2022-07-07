import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
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
  PeopleAddButton,
} from '../Modal/style.js';

const Modal = (props) => {
  const [keyword, setKeyword] = useState('');
  const [people, setPeople] = useState(null);
  const [peopleList, setPeopleList] = useState([]);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const onSearch = () => {
    setPeople({
      empNo: '1',
      dept: '1',
      grade: '1',
      name: keyword,
    });
  };

  const onPeopleAdd = () => {
    if (people) {
      let newPeopleList = [...peopleList, people];
      setPeopleList(newPeopleList);
    }
    // props.setOpenModal(false);
  };

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
          <StyledList peopleList={peopleList}></StyledList>
        </ModalBody>
        <ModalButtonContainer>
          <PeopleAddButton onClick={onPeopleAdd}>추가</PeopleAddButton>
        </ModalButtonContainer>
      </ModalContainer>
    </BackgroundContainer>
  );
};

export default Modal;
