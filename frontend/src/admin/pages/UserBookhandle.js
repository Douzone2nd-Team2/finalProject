import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { getCookie } from '../utils/cookie';

import { Button, Form, Row, Col } from 'react-bootstrap';

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
} from '../styles/UserBookhandle';

const UserBookhandle = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const reservNo = location.state.reservNo;
  const startTime = location.state.startTime;
  const endTime = location.state.endTime;
  const reservName = location.state.reservName;
  const resourceNo = location.state.resourceNo;
  const userNo = location.state.userNo;
  const content = location.state.content;

  // console.log(reservName);
  // console.log(startTime);
  // console.log(endTime);
  // console.log(reservNo);
  // console.log(resourceNo);

  const [book, setBook] = useState([]);

  // 시작, 종료 날짜
  const [startDay, setStartDay] = useState(startTime.substr(0, 10));
  const [endDay, setEndDay] = useState(endTime.substr(0, 10));

  // 시작, 종료 시간
  const [startHour, setStartHour] = useState(parseInt(startTime.substr(11, 2)));
  const [endHour, setEndHour] = useState(parseInt(endTime.substr(11, 2)));

  // console.log(endHour);

  // 시작, 종료 분
  const [startMinute, setStartMinute] = useState(startTime.substr(14, 2));
  const [endMinute, setEndMinute] = useState(endTime.substr(14, 2));

  const [reserveName, setReserveName] = useState(reservName);
  const [description, setDescription] = useState(content);
  const [cateNo, setCateNo] = useState();

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

  // console.log(reservName);
  // console.log(startDay);
  // console.log(sIsAM);
  // console.log(startHour);
  // console.log(startMinute);

  // console.log(reserveName);

  // console.log(startDay + ' ' + startHour + ':' + startMinute + ':00');

  // console.log(startDay);

  // console.log(content);

  // console.log(startDay + ' ' + startHour + ':' + startMinute + ':00');

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
      console.log(res);
      setBook(res.data.data[0]);
      setCateNo(res.data.data[0].cateNo);
    } catch (e) {
      console.log(e);
    }
  };

  const postData = async () => {
    try {
      // console.log(startDay + ' ' + startHour + ':' + startMinute + ':00');
      // console.log(endDay + ' ' + endHour + ':' + endMinute + ':00');
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
        },
        {
          headers: {
            Authorization: getCookie('accessToken'),
          },
        },
      );
      console.log(res);
      navigate('/admin/employeebook');
    } catch (e) {
      console.log(e);
    }
  };

  const clickBtn = (e) => {
    e.preventDefault();
    postData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AllContainer>
      <Container>
        <HeadContainer>
          예약관리 <span className="fa-solid fa-arrow-right-long" /> 사용자별
          예약조회 및 수정
        </HeadContainer>
      </Container>
      <BookContainer>
        <NameContainer>
          <span>{book.resourceName}</span>
          <CategoryContainer>{book.category}</CategoryContainer>
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
                    <input type="date" value={endDay} onChange={changeEndDay} />
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
              <Button variant="primary" type="submit">
                수정
              </Button>
            </ButtonContainer>
          </form>
        </ContentContainer>
      </BookContainer>
    </AllContainer>
  );
};

export default UserBookhandle;
