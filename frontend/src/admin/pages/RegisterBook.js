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
  const [peopleNo, setPeopleNo] = useState([]);
  const [name, setName] = useState('');

  // 시작, 종료 날짜
  const [startDay, setStartDay] = useState('');
  const [endDay, setEndDay] = useState('');

  // 시작, 종료 시간
  const [startHour, setStartHour] = useState('00');

  const [endHour, setEndHour] = useState('00');

  // 시작, 종료 분
  const [startMinute, setStartMinute] = useState('00');
  const [endMinute, setEndMinute] = useState('00');

  const [count, setCount] = useState(0);

  const handleResourceName = (e) => {
    setResourceName(e.target.value);
  };

  const handleReservName = (e) => {
    setReservName(e.target.value);
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

  const changeEndMinute = (e) => {
    setEndMinute(e.target.value);
  };

  const changeStartHour = (e) => {
    setStartHour(e.target.value);
  };

  const changeStartMinute = (e) => {
    setStartMinute(e.target.value);
  };

  const changeEndHour = (e) => {
    setEndHour(e.target.value);
  };

  const changeStartDay = (e) => {
    setStartDay(e.target.value);
  };

  const changeEndDay = (e) => {
    setEndDay(e.target.value);
  };

  const postData = async () => {
    const start = new Date(startDay);
    const end = new Date(endDay);

    if (start === end) {
      if (parseInt(startHour) > parseInt(endHour)) {
        alert('올바른 날짜와 시간을 선택해주세요.');
        return;
      } else {
        if (parseInt(startHour) === parseInt(endHour)) {
          if (parseInt(startMinute) > parseInt(endMinute)) {
            alert('올바른 날짜와 시간을 선택해주세요');
            return;
          }
        }
      }
    } else if (start > end) {
      alert('올바른 날짜와 시간을 선택해주세요.');
      return;
    }
    if (
      startDay === endDay &&
      parseInt(startHour) === parseInt(endHour) &&
      parseInt(startMinute) === parseInt(endMinute)
    ) {
      alert('시작시간과 종료시간이 동일합니다. 다시 선택해주세요.');
      return;
    }

    if (isSumbit()) {
      const body = {
        resourceNo: resourceNo,
        reservName: reservName,
        userNo: userNo,
        startTime: startDay + ' ' + startHour + ':' + startMinute + ':00',
        endTime: endDay + ' ' + endHour + ':' + endMinute + ':00',
        content: content,
        empNoList: peopleNo,
      };

      try {
        const res = await axios.post(
          `${process.env.REACT_APP_SERVER_PORT}/admin/reservation/save`,
          body,
          {
            headers: {
              Authorization: getCookie('accessToken'),
            },
          },
        );
        console.log(res);
        if (res.data.resCode == 1001) {
          alert('이미 예약된 자원입니다. 다시 선택하여 주세요.');
        } else if (res.data.resCode == 1000) {
          alert('예약이 정상적으로 등록되었습니다.');
        } else {
          console.log('비정상적인 종료입니다.');
        }
        //navigate('/admin/employeebook');
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  const isSumbit = () => {
    if (resourceNo === '') {
      alert('자원을 선택해주세요.');
      return false;
    }
    if (reservName === '') {
      alert('예약명을 입력해주세요.');
      return false;
    }
    if (userNo === '') {
      alert('예약자를 선택해주세요.');
      return false;
    }
    return true;
  };

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
          setPeopleNo={setPeopleNo}
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
                        <input
                          type="date"
                          value={startDay}
                          onChange={changeStartDay}
                        />
                      </Col>
                      <Col>
                        <Form.Select
                          size="m"
                          value={startHour}
                          onChange={changeStartHour}
                          style={{
                            width: '80px',
                            float: 'right',
                            margin: '0 auto',
                          }}
                        >
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                        </Form.Select>
                      </Col>
                      <Col style={{ display: 'flex' }}>
                        :
                        <Form.Select
                          size="m"
                          value={startMinute}
                          onChange={changeStartMinute}
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
                        <input
                          type="date"
                          value={endDay}
                          onChange={changeEndDay}
                        />
                      </Col>
                      <Col>
                        <Form.Select
                          size="m"
                          value={endHour}
                          onChange={changeEndHour}
                          style={{
                            width: '80px',
                            float: 'right',
                            margin: '0 auto',
                          }}
                        >
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                        </Form.Select>
                      </Col>
                      <Col style={{ display: 'flex' }}>
                        :
                        <Form.Select
                          size="m"
                          value={endMinute}
                          onChange={changeEndMinute}
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
                  <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
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
