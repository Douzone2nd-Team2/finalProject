import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getCookie } from '../../utils/cookie';
import ResourceFileUploadTest from './ResourceFileUploadTest';

import axios from 'axios';

import { Button, Form, Modal, Row, Col } from 'react-bootstrap';

const ResourceInput = ({ getAll }) => {
  const [show, setShow] = useState(false);

  const [resourceName, setResourceName] = useState('');
  const [location, setLocation] = useState('');
  const [people, setPeople] = useState('');

  const [time, setTime] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');

  const [Etime, setEtime] = useState('');
  const [Ehour, setEhour] = useState('');
  const [Eminute, setEminute] = useState('');

  const [option, setOption] = useState('');
  const [fuel, setFuel] = useState('');
  const [content, setContent] = useState('');
  const [able, setAble] = useState('');

  const [resourceNo, setResourceNo] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [valued, setValued] = useState('');

  const toggleModal = useRef(null);

  const handleChange = (e) => {
    setValued(e.target.value);
  };
  const handleResourceName = (e) => {
    setResourceName(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handlePeople = (e) => {
    setPeople(e.target.value);
  };
  const handleAble = (e) => {
    setAble(e.target.value);
  };

  //시작시간
  const ShandleTime = (e) => {
    setTime(e.target.value);
    console.log(time);
  };
  const ShandleHourTime = (e) => {
    setHour(e.target.value);
    console.log(hour);
  };
  const ShandleMinuteTime = (e) => {
    setMinute(e.target.value);
    console.log(minute);
  };

  //종료시간
  const EhandleTime = (e) => {
    setEtime(e.target.value);
  };
  const EhandleHourTime = (e) => {
    setEhour(e.target.value);
  };
  const EhandleMinuteTime = (e) => {
    setEminute(e.target.value);
  };

  const handleOption = (e) => {
    setOption(e.target.value);
  };
  const handleFuel = (e) => {
    setFuel(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const postTest1 = async () => {
    const resourceInsert = {
      cateNo: valued,
      resourceName: resourceName,
      people: people,
      location: location,
      availableTime:
        time + hour + ':' + minute + ' ~ ' + Etime + Ehour + ':' + Eminute,
      option: option,
      fuel: fuel,
      content: content,
      able: able,
      adminNo: 1,
    };

    axios
      .post(
        `${process.env.REACT_APP_SERVER_PORT}/resource/register`,
        resourceInsert,
      )
      .then((response) => {
        console.log(response);
        setResourceNo(response.data.data.resourceNo);
        alert('등록성공!');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const exitModal = () => {
    toggleModal.current.click();
  };
  const clickBtn = () => {
    postTest1();
    exitModal();
    getAll();
  };
  useEffect(() => {
    if (valued === '') {
      console.log('valued empty');
      setValued('1');
      console.log(valued);
    } else {
      console.log('valued is not empty');
    }
  }, []);

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ float: 'right' }}>
        등록
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Resource Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>카테고리</Form.Label>
                  <Form.Select onChange={handleChange} value={valued}>
                    <option value="1">회의실</option>
                    <option value="2">차량</option>
                    <option value="3">노트북</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Label>자원이름</Form.Label>
                  <Form.Control
                    type="text"
                    value={resourceName}
                    onChange={handleResourceName}
                    placeholder="resourceName"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>사용여부</Form.Label>
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    name="checked"
                    value="Y"
                    onClick={handleAble}
                  />
                  Y
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    name="checked"
                    value="N"
                    onClick={handleAble}
                  />
                  N
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>이용가능시간</Form.Label>
              <Row>
                <Row>
                  <Col>시작시간:</Col>
                  <Col>
                    <Form.Select size="sm" onChange={ShandleTime} value={time}>
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Select
                      size="sm"
                      onChange={ShandleHourTime}
                      value={hour}
                    >
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
                    </Form.Select>
                  </Col>
                  :
                  <Col>
                    <Form.Select
                      size="sm"
                      onChange={ShandleMinuteTime}
                      value={minute}
                    >
                      <option value="00">00</option>
                      <option value="30">30</option>
                    </Form.Select>
                  </Col>
                </Row>

                <Row>
                  <Col>종료시간:</Col>
                  <Col>
                    <Form.Select size="sm" onChange={EhandleTime} value={Etime}>
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Select
                      size="sm"
                      onChange={EhandleHourTime}
                      value={Ehour}
                    >
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
                    </Form.Select>
                  </Col>
                  :
                  <Col>
                    <Form.Select
                      size="sm"
                      onChange={EhandleMinuteTime}
                      value={Eminute}
                    >
                      <option value="00">00</option>
                      <option value="30">30</option>
                    </Form.Select>
                  </Col>
                </Row>

                <Row>
                  <Col>Full-Time:</Col>
                  <Col>
                    <Form.Check
                      type="radio"
                      value="Full-time"
                      // onChange={handleTime}
                    />
                  </Col>
                </Row>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>옵션</Form.Label>
              <Form.Control
                type="text"
                value={option}
                onChange={handleOption}
                placeholder="option"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>설명</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                value={content}
                onChange={handleContent}
                placeholder="Content"
              />
            </Form.Group>
            {valued === '1' ? (
              <>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Row>
                    <Col>
                      <Form.Label>위치</Form.Label>
                      <Form.Control
                        type="text"
                        value={location}
                        onChange={handleLocation}
                        placeholder="location"
                      />
                    </Col>
                    <Col>
                      <Form.Label>인원</Form.Label>
                      <Form.Control
                        type="number"
                        value={people}
                        onChange={handlePeople}
                        placeholder="people"
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </>
            ) : valued === '2' ? (
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Row>
                  <Col>
                    <Form.Label>연료</Form.Label>
                    <Form.Control
                      type="text"
                      value={fuel}
                      onChange={handleFuel}
                      placeholder="location"
                    />
                  </Col>
                  <Col>
                    <Form.Label>개수</Form.Label>
                    <Form.Control
                      type="number"
                      value={people}
                      onChange={handlePeople}
                      placeholder="remainder"
                    />
                  </Col>
                </Row>
              </Form.Group>
            ) : valued === '3' ? (
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Row>
                  <Col>
                    <Form.Label>개수</Form.Label>
                    <Form.Control
                      type="number"
                      value={people}
                      onChange={handlePeople}
                      placeholder="remainder"
                    />
                  </Col>
                </Row>
              </Form.Group>
            ) : (
              <></>
            )}
            <ResourceFileUploadTest />
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} ref={toggleModal}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => clickBtn()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ResourceInput;
