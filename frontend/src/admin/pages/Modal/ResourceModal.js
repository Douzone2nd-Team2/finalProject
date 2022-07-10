import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { getCookie } from '../../utils/cookie';

import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';

import ResourceStyledList from '../Modal/ResourceStyledList';

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

const ResourceModal = (props) => {
  const count = props.count;
  const [keyword, setKeyword] = useState('');
  const [resource, setResource] = useState(null);
  const [resourceList, setResourceList] = useState([]);
  const [resourceNo, setResourceNo] = useState('');
  const [resourceName, setResourceName] = useState('');
  const [cateNo, setCateNo] = useState(0);
  const [close, setClose] = useState(false);

  const searchPeople = async () => {
    const data = {
      keyword: keyword,
    };
    const searchResult = await axios
      //   .get(`${process.env.REACT_APP_SERVER_PORT}/resource/search`, {
      //     params: data,
      //     headers: {
      //       Authorization: getCookie('accessToken'),
      //     },
      .get(`${process.env.REACT_APP_SERVER_PORT}/resource/search`, {
        params: data,
        headers: {
          Authorization: getCookie('accessToken'),
        },
      })
      .then((res) => {
        if (res.data.resCode === 1001) {
          console.log('[Axios SearchResource] 알 수 없는 오류가 발생했습니다.');
          return;
        } else {
          return res.data.data;
        }
        console.log(res);
      })
      .catch(console.error);
    console.log(searchResult);
    setResourceList(searchResult);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const onSearch = () => {
    searchPeople();
  };

  // const onPeopleAdd = () => {
  //   if (people) {
  //     let newPeopleList = [...peopleList, people];
  //     setPeopleList(newPeopleList);
  //   }
  //   // props.setOpenModal(false);
  // };

  const onClose = () => {
    props.setOpenModal3(false);
    props.setResourceNo(resourceNo);
    props.setResourceName(resourceName);
    props.setCateNo(cateNo);
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
          <ResourceStyledList
            resourceList={resourceList}
            setResourceNo={setResourceNo}
            setResourceName={setResourceName}
            setCateNo={setCateNo}
            setClose={setClose}
          ></ResourceStyledList>
        </ModalBody>
        <ModalButtonContainer>
          <ModaldButton onClick={onClose}>닫기</ModaldButton>
          {/* <ModaldButton>추가</ModaldButton> */}
        </ModalButtonContainer>
      </ModalContainer>
    </BackgroundContainer>
  );
};

export default ResourceModal;
