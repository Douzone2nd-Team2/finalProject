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
} from '../styles/UserBookhandle';

const UserBookhandle = () => {
  const location = useLocation();
  const reservNo = location.state.reservNo;
  const startTime = location.state.startTime;
  const endTime = location.state.endTime;
  const userName = location.state.userName;

  const [openModal, setOpenModal] = useState(false);

  console.log(startTime);
  console.log(endTime);

  const startDay = startTime.substr(0, 10);
  const endDay = endTime.substr(0, 10);

  const startHour = startTime.substr(11, 2);
  const endHour = endTime.substr(11, 2);

  const startMinute = startTime.substr(14, 2);
  const endMinute = endTime.substr(14, 2);

  const sIsAM = startHour > 12 ? 'PM' : 'AM';
  const eIsAM = endHour > 12 ? 'PM' : 'AM';

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
            <form>
              <ContentSort>
                <Row>
                  <Row>
                    <Col style={{ maxWidth: '150px' }}>시작시간 :</Col>
                    <Col>
                      <input type="date" value={startDay} />
                    </Col>
                    <Col>
                      <Form.Select size="sm" value={sIsAM}>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select
                        size="sm"
                        value={startHour > 12 ? startHour - 12 : startHour}
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
                      <Form.Select size="sm" value={eIsAM}>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select
                        size="sm"
                        value={endHour > 12 ? endHour - 12 : endHour}
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
                <input type="text" id="user" placeholder={userName} />
                <MagnifyingGlass>
                  <button
                    className="fa-solid fa-magnifying-glass"
                    onClick={(e) => {
                      e.preventDefault();
                      btnOpen();
                    }}
                  />
                </MagnifyingGlass>
              </ContentSort>
              <ContentSort>
                <label htmlFor="resourceInfo" style={{ maxWidth: '150px' }}>
                  정보
                </label>
                <textarea
                  cols="50"
                  rows="5"
                  id="resourceInfo"
                  placeholder={book.reservName}
                />
              </ContentSort>
              <ButtonContainer>
                <Button variant="primary">수정</Button>
              </ButtonContainer>
            </form>
          </ContentContainer>
        </BookContainer>
      </AllContainer>
    </>
  );
};

export default UserBookhandle;
