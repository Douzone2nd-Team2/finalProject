import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Modal from '../../user/components/Reservation/Modal/Modal';

import { arrayIsEmpty } from '../utils/jsFunction';
import { getCookie } from '../utils/cookie';

import { Button, Form, Row, Col } from 'react-bootstrap';
import ResourceModal from './Modal/ResourceModal';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import SearchIcon from '@material-ui/icons/Search';

import {
  AllContainer,
  Container,
  HeadContainer,
  CategoryContainer,
  BookContainer,
  NameContainer,
  ContentContainer,
  ContentSort,
  ButtonContainer,
  ResourceSearchButton,
  WrapperContainer,
  StyledButton,
} from '../styles/ResourceBookhandle';

import {
  CountButtonContainer,
  CountButton,
  CountInfo,
  PeopleNameTag,
  PeopleGridContainer,
  PeopleSearchButton,
  PeopleContainer,
  PeopleInput,
  EmptyContainer,
  EmptyRContainer,
} from '../styles/RegisterBook';

const ResourceBookhandle = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const reservNo = location.state.reservNo;
  const resourceNo = location.state.resourceNo;
  const startTime = location.state.startTime;
  const endTime = location.state.endTime;
  const reservName = location.state.reservName;
  const resourceName = location.state.resourceName;
  const userNo = location.state.userNo;
  const content = location.state.content;
  const userName = location.state.userName;
  const category = location.state.category;
  const cateNo = location.state.cateNo;

  const [book, setBook] = useState([]);

  // 시작, 종료 날짜
  const [startDay, setStartDay] = useState(startTime.substr(0, 10));
  const [endDay, setEndDay] = useState(endTime.substr(0, 10));

  // 시작, 종료 시간
  const [startHour, setStartHour] = useState(parseInt(startTime.substr(11, 2)));
  const [endHour, setEndHour] = useState(parseInt(endTime.substr(11, 2)));

  // 시작, 종료 분
  const [startMinute, setStartMinute] = useState(startTime.substr(14, 2));
  const [endMinute, setEndMinute] = useState(endTime.substr(14, 2));

  const [upresourceName, setUpResourceName] = useState(resourceName);
  const [reserveName, setReserveName] = useState(reservName);
  const [description, setDescription] = useState(content);

  const [openModal, setOpenModal] = useState(false);
  const [count, setCount] = useState(0);
  const [people, setPeople] = useState();
  const [peopleNo, setPeopleNo] = useState([]);
  const [peopleInit, setPeopleInit] = useState([]);
  const [name, setName] = useState('');

  const changeReserveName = (e) => {
    setReserveName(e.target.value);
  };

  const changeStartDay = (e) => {
    setStartDay(e.target.value);
  };

  const changeEndDay = (e) => {
    setEndDay(e.target.value);
  };

  const changeStartHour = (e) => {
    setStartHour(e.target.value);
  };

  const changeEndHour = (e) => {
    setEndHour(e.target.value);
  };

  const changeStartMinute = (e) => {
    setStartMinute(e.target.value);
  };

  const changeEndMinute = (e) => {
    setEndMinute(e.target.value);
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  const changeResourceName = (e) => {
    setUpResourceName(e.target.value);
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_PORT}/admin/reservation/view?reservNo=${reservNo}`,
        {
          headers: {
            Authorization: getCookie('accessToken'),
          },
        },
      );
      setCount(res.data.data.peopleList.length);
      setPeopleInit(res.data.data.peopleList);
      setBook(res.data.data.reservationView[0]);
      // setResourceName(res.data.data.reservationView.resourceName);
    } catch (e) {
      console.log(e);
    }
  };

  const postData = async () => {
    try {
      var temp = [];
      if (!people) {
        temp = peopleInit.map((item) => item.userNo);
        setPeopleNo(temp);
      }

      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_PORT}/admin/reservation/modify`,
        {
          reservNo: reservNo,
          resourceNo: resourceNo,
          userNo: userNo,
          cateNo: cateNo,
          reservName: reserveName,
          startTime: startDay + ' ' + startHour + ':' + startMinute + ':00',
          endTime: endDay + ' ' + endHour + ':' + endMinute + ':00',
          content: description,
          empNoList: arrayIsEmpty(peopleNo) ? temp : peopleNo,
          resourceName: resourceName,
        },
        {
          headers: {
            Authorization: getCookie('accessToken'),
          },
        },
      );
      alert('수정이 완료되었습니다');
      navigate('/admin/resourcebook', {
        state: { resourceName: resourceName, resourceNo: resourceNo },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const clickBtn = (e) => {
    e.preventDefault();
    postData();
  };

  const onDecrease = (e) => {
    e.preventDefault();
    setCount(count === 0 ? 0 : count - 1);
  };

  const onIncrease = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const onPeopleSearch = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {openModal ? (
        <Modal
          setOpenModal={setOpenModal}
          setPeople={setPeople}
          setPeopleNo={setPeopleNo}
          count={count}
        ></Modal>
      ) : null}
      <Container>
        <HeadContainer>
          예약관리 <span className="fa-solid fa-arrow-right-long" /> 자원별
          예약조회 및 수정
        </HeadContainer>
        <WrapperContainer>
          <BookContainer>
            <NameContainer>
              <span>
                자원 이름 : {book.resourceName}&nbsp;&nbsp; 예약자 : {userName}
              </span>
              <CategoryContainer>{category}</CategoryContainer>
            </NameContainer>
            <hr />
            <ContentContainer>
              <form onSubmit={clickBtn}>
                <ContentSort>
                  <Row>
                    <Row>
                      <Col style={{ maxWidth: '150px' }}>예약명 : </Col>
                      <Col>
                        <input
                          type="text"
                          value={reserveName}
                          onChange={changeReserveName}
                        />
                      </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
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
                          size="sm"
                          value={startHour}
                          onChange={changeStartHour}
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
                      :
                      <Col>
                        <Form.Select
                          size="sm"
                          value={startMinute}
                          onChange={changeStartMinute}
                        >
                          <option value="00">00</option>
                          <option value="30">30</option>
                        </Form.Select>
                      </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
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
                          size="sm"
                          value={endHour}
                          onChange={changeEndHour}
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
                      :
                      <Col>
                        <Form.Select
                          size="sm"
                          value={endMinute}
                          onChange={changeEndMinute}
                        >
                          <option value="00">00</option>
                          <option value="30">30</option>
                        </Form.Select>
                      </Col>
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
                        {!people ? (
                          peopleInit &&
                          peopleInit.map((nameTag, index) => {
                            return (
                              <PeopleNameTag key={nameTag.userNo}>
                                {nameTag.name}
                              </PeopleNameTag>
                            );
                          })
                        ) : (
                          <></>
                        )}
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
                <br />
                <ContentSort>
                  <label htmlFor="resourceInfo" style={{ maxWidth: '150px' }}>
                    정보
                  </label>
                  <textarea
                    cols="50"
                    rows="5"
                    id="resourceInfo"
                    onChange={changeDescription}
                    value={description}
                  />
                </ContentSort>
                <ButtonContainer>
                  <StyledButton type="submit">수정</StyledButton>
                </ButtonContainer>
              </form>
            </ContentContainer>
          </BookContainer>
        </WrapperContainer>
      </Container>
    </>
  );
};

export default ResourceBookhandle;
