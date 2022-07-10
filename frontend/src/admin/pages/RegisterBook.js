import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../utils/cookie';

import ResourceModal from '../pages/Modal/ResourceModal';
import PeopleModal from '../pages/Modal/PeopleModal';
import Modal from '../../user/components/Reservation/Modal/Modal';
import { Button, Form, Row, Col } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';

import {
  AllContainer,
  Container,
  HeadContainer,
  BookContainer,
  NameContainer,
  ContentContainer,
  ContentSort,
  ButtonContainer,
  MagnifyingGlass,
  CountButtonContainer,
  CountButton,
  CountInfo,
  CategoryButton,
  SubmitButton,
  PeopleNameTag,
  PeopleGridContainer,
  PeopleSearchButton,
  PeopleContainer,
  PeopleInput,
  EmptyContainer,
  EmptyRContainer,
} from '../styles/RegisterBook';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const RegisterBook = () => {
  const navigate = useNavigate();

  const [reservNo, setReservNo] = useState('');
  const [able, setAble] = useState('');
  const [userNo, setUserNo] = useState('');
  const [userName, setUserName] = useState('');
  const [reservName, setReservName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [resourceNo, setResourceNo] = useState('');
  const [resourceName, setResourceName] = useState('');
  const [option, setOption] = useState('');
  const [content, setContent] = useState('');
  const [cateNo, setCateNo] = useState(0);

  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);

  const [people, setPeople] = useState([]);
  const [name, setName] = useState('');

  const [startDay, setStartDay] = useState('');
  const [endDay, setEndDay] = useState('');
  const [sIsAM, SetSIsAm] = useState('');
  const [eIsAM, setEIsAm] = useState('');
  const [startHour, setStartHour] = useState('');
  const [endHour, setEndHour] = useState('');
  const [startMinute, setStartMinute] = useState('');
  const [endMinute, setEndMinute] = useState('');

  const [count, setCount] = useState(0);

  const handleResourceName = (e) => {
    setResourceName(e.target.value);
  };

  const handleReservName = (e) => {
    setReservName(e.target.value);
  };

  const handleOption = (e) => {
    setOption(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const btnOpen = () => {
    setOpenModal3(true);
  };

  const btnOpen2 = () => {
    setOpenModal2(true);
  };

  const onIncrease = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const onDecrease = (e) => {
    e.preventDefault();
    setCount(count === 0 ? 0 : count - 1);
  };

  const onPeopleSearch = (e) => {
    console.log('modal3');
    e.preventDefault();
    setOpenModal(true);
  };

  console.log(userNo);
  console.log(people);

  return (
    <>
      {openModal3 ? (
        <ResourceModal
          setOpenModal3={setOpenModal3}
          setResourceNo={setResourceNo}
          setResourceName={setResourceName}
          setCateNo={setCateNo}
        ></ResourceModal>
      ) : null}
      {openModal2 ? (
        <PeopleModal
          setOpenModal2={setOpenModal2}
          setUserNo={setUserNo}
          setUserName={setUserName}
        ></PeopleModal>
      ) : null}

      {openModal ? (
        <Modal
          setOpenModal={setOpenModal}
          count={count}
          setPeople={setPeople}
        ></Modal>
      ) : null}
      <AllContainer>
        <Container>
          <HeadContainer>
            예약관리 <span className="fa-solid fa-arrow-right-long" /> 예약등록
          </HeadContainer>
          <BookContainer>
            <NameContainer>예약 등록</NameContainer>
            <hr />
            <ContentContainer>
              <form>
                <ContentSort>
                  <label htmlFor="resourceName">예약명</label>
                  <input
                    type="text"
                    id="resourceName"
                    value={reservName}
                    onChange={handleReservName}
                  />
                </ContentSort>
                <ContentSort>
                  <label htmlFor="userNo">예약자</label>
                  <input
                    type="text"
                    id="userNo"
                    value={userName}
                    onChange={handleUserName}
                  />
                  <MagnifyingGlass>
                    <button
                      className="fa-solid fa-magnifying-glass"
                      onClick={(e) => {
                        e.preventDefault();
                        btnOpen2();
                      }}
                    />
                  </MagnifyingGlass>
                </ContentSort>
                <ContentSort>
                  <label htmlFor="resourceChoice">자원</label>
                  <input
                    type="text"
                    id="resourceChoice"
                    value={resourceName}
                    onChange={handleResourceName}
                  />

                  <MagnifyingGlass>
                    <button
                      className="fa-solid fa-magnifying-glass"
                      onClick={(e) => {
                        e.preventDefault();
                        btnOpen();
                      }}
                    />
                  </MagnifyingGlass>
                  {cateNo === 1 && <CategoryButton>회의실 </CategoryButton>}
                  {cateNo === 2 && <CategoryButton>차량</CategoryButton>}
                  {cateNo === 3 && <CategoryButton>노트북</CategoryButton>}
                </ContentSort>
                <ContentSort>
                  <Row>
                    <Row style={{ marginTop: '1px' }}>
                      <Col style={{ maxWidth: '150px' }}>시작시간 :</Col>
                      <Col>
                        <input type="date" value={startDay} />
                      </Col>
                      <Col>
                        <Form.Select
                          size="m"
                          value={sIsAM}
                          style={{
                            width: '80px',
                            float: 'right',
                            margin: '0 auto',
                          }}
                        >
                          <option value="AM">AM</option>
                          <option value="PM">PM</option>
                        </Form.Select>
                      </Col>
                      <Col style={{ display: 'flex' }}>
                        <Form.Select
                          size="m"
                          value={startHour > 12 ? startHour - 12 : startHour}
                          style={{ width: '80px', marginRight: '10px' }}
                        >
                          <option value="01">1</option>
                          <option value="02">2</option>
                          <option value="03">3</option>
                          <option value="04">4</option>
                          <option value="05">5</option>
                          <option value="06">6</option>
                          <option value="07">7</option>
                          <option value="08">8</option>
                          <option value="09">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </Form.Select>
                        :
                        <Form.Select
                          size="m"
                          value={startMinute}
                          style={{ width: '80px', marginLeft: '10px' }}
                        >
                          <option value="00">00</option>
                          <option value="30">30</option>
                        </Form.Select>
                      </Col>
                      <Col></Col>
                    </Row>
                    <Row style={{ marginTop: '7px' }}>
                      <Col style={{ maxWidth: '150px' }}>종료시간 :</Col>
                      <Col>
                        <input type="date" value={endDay} />
                      </Col>
                      <Col>
                        <Form.Select
                          size="m"
                          value={eIsAM}
                          style={{
                            width: '80px',
                            float: 'right',
                            margin: '0 auto',
                          }}
                        >
                          <option value="AM">AM</option>
                          <option value="PM">PM</option>
                        </Form.Select>
                      </Col>
                      <Col style={{ display: 'flex' }}>
                        <Form.Select
                          size="m"
                          value={endHour > 12 ? endHour - 12 : endHour}
                          style={{ width: '80px', marginRight: '10px' }}
                        >
                          <option value="01">1</option>
                          <option value="02">2</option>
                          <option value="03">3</option>
                          <option value="04">4</option>
                          <option value="05">5</option>
                          <option value="06">6</option>
                          <option value="07">7</option>
                          <option value="08">8</option>
                          <option value="09">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </Form.Select>
                        :
                        <Form.Select
                          size="m"
                          value={endMinute}
                          style={{ width: '80px', marginLeft: '10px' }}
                        >
                          <option value="00">00</option>
                          <option value="30">30</option>
                        </Form.Select>
                      </Col>

                      <Col></Col>
                    </Row>
                  </Row>
                </ContentSort>
                {cateNo === 1 && (
                  <>
                    <ContentSort>
                      <label className="totaluser" htmlFor="totalUser">
                        추가 인원
                      </label>
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
                      <PeopleGridContainer></PeopleGridContainer>
                    </ContentSort>
                    <ContentSort>
                      <EmptyContainer> </EmptyContainer>
                      <PeopleGridContainer>
                        {people &&
                          people.map((nameTag, index) => {
                            return (
                              <PeopleNameTag key={index}>
                                {nameTag}
                              </PeopleNameTag>
                            );
                          })}
                      </PeopleGridContainer>
                      <EmptyRContainer></EmptyRContainer>
                    </ContentSort>
                  </>
                )}
                {/* 
                <ContentSort>
                  <label htmlFor="option">옵션</label>
                  <input
                    type="text"
                    id="option"
                    value={option}
                    onChange={handleOption}
                  />
                </ContentSort> */}
                {/* {cateNo === 2 && (
                  <ContentSort>
                    <label htmlfor="dataSort">연료</label>
                    <select id="dataSort">
                      <option value="1">휘발유</option>
                      <option value="2">경유</option>
                      <option value="3">전기</option>
                    </select>
                  </ContentSort>
                )} */}

                <ContentSort>
                  <label htmlFor="resourceInfo">추가 정보</label>
                  <textarea
                    cols="50"
                    rows="5"
                    id="resourceInfo"
                    value={content}
                    onChange={handleContent}
                  />
                </ContentSort>
                <ButtonContainer>
                  <SubmitButton>등록</SubmitButton>
                </ButtonContainer>
              </form>
            </ContentContainer>
          </BookContainer>
        </Container>
      </AllContainer>
    </>
  );
};

export default RegisterBook;
