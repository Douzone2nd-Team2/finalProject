import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import Modal from '../pages/Modal/Modal';
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
  MagnifyingGlass,
  ButtonContainer,
} from '../styles/ResourceBookhandle';

const ResourceBookhandle = () => {
  const location = useLocation();
  const reservNo = location.state.reservNo;
  const startTime = location.state.startTime;
  const endTime = location.state.endTime;
  const userName = location.state.userName;

  console.log(startTime);
  console.log(endTime);

  const [openModal, setOpenModal] = useState(false);

  console.log('바뀌기 전 ; ', startTime);
  console.log('바뀌기 전 : ', endTime);

  const startDay = startTime.substr(0, 10);
  const endDay = endTime.substr(0, 10);

  const startHour = parseInt(startTime.substr(11, 2));
  const endHour = parseInt(endTime.substr(11, 2));

  console.log('바뀌기 후 ; ', startHour);
  console.log('바뀌기 후 : ', endHour);

  const startMinute = startTime.substr(14, 2);
  const endMinute = endTime.substr(14, 2);

  const [book, setBook] = useState([]);

  const [time, setTime] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');

  const btnOpen = () => {
    setOpenModal(true);
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
      console.log(res);
      setBook(res.data.data[0]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(book);
  }, []);

  return (
    <>
      {openModal ? <Modal setOpenModal={setOpenModal}></Modal> : null}
      <AllContainer>
        <Container>
          <HeadContainer>
            예약관리 <span className="fa-solid fa-arrow-right-long" /> 자원별
            예약조회 및 수정
          </HeadContainer>
        </Container>
        <BookContainer>
          <NameContainer>
            <span>{book?.resourceName}</span>
            <CategoryContainer>{book?.category}</CategoryContainer>
          </NameContainer>
          <hr />
          <ContentContainer>
            <form>
              <ContentSort>
                <Row>
                  <Row>
                    <Col style={{ maxWidth: '150px' }}>시작시간 :</Col>
                    <Col>
                      <input type="date" value={startDay} />
                    </Col>
                    <Col>
                      <Form.Select size="sm" value={startHour}>
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
                      <Form.Select size="sm" value={startMinute}>
                        <option value="00">00</option>
                        <option value="30">30</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ maxWidth: '150px' }}>종료시간 :</Col>
                    <Col>
                      <input type="date" value={endDay} />
                    </Col>
                    <Col>
                      <Form.Select size="sm" value={endHour}>
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
                      <Form.Select size="sm" value={endMinute}>
                        <option value="00">00</option>
                        <option value="30">30</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Row>
              </ContentSort>
              <ContentSort>
                <label htmlFor="user" style={{ maxWidth: '150px' }}>
                  사용자
                </label>
                <input type="text" id="user" placeholder={book?.userName} />
                {/* <MagnifyingGlass>
                  <button
                    className="fa-solid fa-magnifying-glass"
                    onClick={(e) => {
                      e.preventDefault();
                      btnOpen();
                    }}
                  />
                </MagnifyingGlass> */}
              </ContentSort>
              <ContentSort>
                <label htmlFor="resourceInfo" style={{ maxWidth: '150px' }}>
                  정보
                </label>
                <textarea
                  cols="50"
                  rows="5"
                  id="resourceInfo"
                  value={book?.content}
                />
              </ContentSort>
              <ButtonContainer>
                <Button variant="primary ">수정</Button>
              </ButtonContainer>
            </form>
          </ContentContainer>
        </BookContainer>
      </AllContainer>
    </>
  );
};

export default ResourceBookhandle;
