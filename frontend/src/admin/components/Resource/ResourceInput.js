import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getCookie } from '../../utils/cookie';

import axios from 'axios';

import { Button, Form, Modal, Row, Col } from 'react-bootstrap';

import { SubmitButton } from '../../styles/Resource';

const ResourceInput = ({ show, handleShow, handleClose, getAll }) => {
  const [resourceName, setResourceName] = useState('');
  const [location, setLocation] = useState('');
  const [people, setPeople] = useState('');

  const [startHour, setStartHour] = useState('00');
  const [startMinute, setStartMinute] = useState('00');

  const [endHour, setEndHour] = useState('00');
  const [endMinute, setEndMinute] = useState('00');

  const [fullTime, setFulltime] = useState('');

  const [option, setOption] = useState('');
  const [fuel, setFuel] = useState('');
  const [content, setContent] = useState('');
  const [able, setAble] = useState('');

  const [resourceNo, setResourceNo] = useState();

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

  const handleFullTime = (e) => {
    setFulltime(e.target.value);
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

  //시작시간
  const ShandleHourTime = (e) => {
    setStartHour(e.target.value);
  };
  const ShandleMinuteTime = (e) => {
    setStartMinute(e.target.value);
  };

  //종료시간
  const changeEndHour = (e) => {
    setEndHour(e.target.value);
  };
  const changeEndMinute = (e) => {
    setEndMinute(e.target.value);
  };

  const [imgFile, setImgFile] = useState([]);
  const [formData, setFormData] = useState(new FormData());

  useEffect(() => {
    if (imgFile) {
      const d = new FormData();
      for (let i = 0; i < imgFile.length; i++) {
        d.append('images', imgFile[i]);
      }

      setFormData(d);
    }
  }, [imgFile]);

  const postTest = async () => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_PORT}/resource/fileupload`,
        formData,

        {
          headers: {
            Authorization: getCookie('accessToken'),
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      .then(() => {
        handleClose();
      })
      .catch((err) => {
        return err;
      });
  };

  console.log(
    startHour + ':' + startMinute + ' ~ ' + endHour + ':' + endMinute,
  );
  const handleChangeFile = useCallback((e) => {
    setImgFile(e.target.files);
  });

  const postTest1 = async () => {
    const resourceInsert = {
      cateNo: valued,
      resourceName: resourceName,
      people: people,
      location: location,
      availableTime: fullTime
        ? fullTime
        : startHour + ':' + startMinute + ' ~ ' + endHour + ':' + endMinute,
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
        setResourceNo(response.data.data.resourceNo);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clickBtn = () => {
    postTest1();
  };

  useEffect(() => {
    if (valued === '') {
      setValued('1');
    } else {
    }
  }, []);

  useEffect(() => {
    if (resourceNo !== '') {
      // 자원 등록 완료 -> 이미지 통신
      postTest();
    }
  }, [resourceNo]);

  return (
    <>
      <SubmitButton onClick={handleShow} style={{ float: 'right' }}>
        등록
      </SubmitButton>
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
                  <Col style={{ maxWidth: '150px' }}>시작시간 :</Col>
                  <Col>
                    <Form.Select
                      size="sm"
                      value={startHour}
                      onChange={ShandleHourTime}
                    >
                      <option value="00">00</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
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
                      onChange={ShandleMinuteTime}
                    >
                      <option value="00">00</option>
                      <option value="30">30</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ maxWidth: '150px' }}>종료시간 :</Col>
                  <Col>
                    <Form.Select
                      size="sm"
                      value={endHour}
                      onChange={changeEndHour}
                    >
                      <option value="00">00</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
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

                <Row>
                  <Col>Full-Time:</Col>
                  <Col>
                    <Form.Check
                      type="checkbox"
                      value="Full-time"
                      onChange={handleFullTime}
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
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <input
            type="file"
            id="file"
            multiple
            name="image"
            onChange={handleChangeFile}
          />
          <Button
            variant="secondary"
            type="reset"
            onClick={handleClose}
            ref={toggleModal}
          >
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
