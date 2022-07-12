import { useEffect, useState } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCookie } from '../utils/cookie';
import axios from 'axios';
import {
  Container,
  ResourceContainer,
  ResourceContainer2,
  ResourceForm,
  Forminput,
  ButtonContainer,
  Formtd,
} from '../styles/Resource';

const ResourceDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const avalidTime = state.availableTime;

  const [inputStatus, setInputStatus] = useState(false);

  const [resource, setResource] = useState([]);
  const [fileList, setFileList] = useState([]);

  const [imgFile, setImgFile] = useState([]);
  const [formData, setFormData] = useState(new FormData());

  //image preview
  const [image, setImage] = useState('');

  const [resourceName, setResourceName] = useState('');
  const [location, setLocation] = useState('');
  const [people, setPeople] = useState('');

  const [startHour, setStartHour] = useState('');
  const [startMinute, setStartMinute] = useState('');

  const [endHour, setEndHour] = useState('');
  const [endMinute, setEndMinute] = useState('');

  // 시작, 종료 시간
  // const [startHour, setStartHour] = useState(parseInt(startTime.substr(11, 2)));
  // const [endHour, setEndHour] = useState(parseInt(endTime.substr(11, 2)));

  // 시작, 종료 분
  // const [startMinute, setStartMinute] = useState(startTime.substr(14, 2));
  // const [endMinute, setEndMinute] = useState(endTime.substr(14, 2));

  const [fullTime, setFulltime] = useState('');

  const [option, setOption] = useState('');
  const [fuel, setFuel] = useState('');
  const [content, setContent] = useState('');
  const [able, setAble] = useState('Y');
  const [detailsImgs, setDetailImgs] = useState('');
  const [cateNo, setCateNo] = useState('');

  const handleResourceName = (e) => {
    setResourceName(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handlePeople = (e) => {
    setPeople(e.target.value);
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

  // Full-Time
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

  const handleAble = (e) => {
    if (e.target.value == 'Y') {
      setInputStatus(true);
      setAble('Y');
      console.log(able);
    } else {
      setInputStatus(false);
      setAble('N');
      console.log(able);
    }
  };

  useEffect(() => {
    if (imgFile.length != 0) {
      const d = new FormData();
      for (let i = 0; i < imgFile.length; i++) {
        d.append('images', imgFile[i]);
      }

      setFormData(d);
    }
  }, [imgFile]);

  useEffect(() => {
    getResourceNo(state);
  }, []);

  const getResourceNo = async (state) => {
    console.log(state);
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PORT}/resource/detail?resourceNo=${state}`,
        { Authorization: getCookie('accessToken') },
      )
      .then((response) => {
        setResourceName(response.data.data.resource.resourceName);
        setLocation(response.data.data.resource.location);
        setPeople(response.data.data.resource.people);
        setOption(response.data.data.resource.option);
        setFuel(response.data.data.resource.fuel);
        setContent(response.data.data.resource.content);
        setAble(response.data.data.resource.able);
        setResourceName(response.data.data.resource.resourceName);
        setCateNo(response.data.data.resource.cateNo);

        setFileList(response.data.data.fileList);
        setInputStatus(response.data.data.resource.able === 'Y');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 미리보기
  const imagePreview = async (e) => {
    const fileArr = e.target.files;

    let fileURLs = [];

    let file;
    let filesLength = fileArr.length > 10 ? 10 : fileArr.length;

    for (let i = 0; i < filesLength; i++) {
      file = fileArr[i];

      let reader = new FileReader();
      reader.onload = () => {
        console.log(reader.result);
        fileURLs[i] = reader.result;
        setDetailImgs([...fileURLs]);
        setImgFile(e.target.files);
        console.log(imgFile);
        console.log('핸들체인지');
      };
      reader.readAsDataURL(file);
    }
  };

  // 파일수정
  const postImgae = (e) => {
    console.log('postImge시작 ');
    if (imgFile.length > 0) {
      console.log('imgFile: ' + imgFile);
      const d = new FormData();
      for (let i = 0; i < imgFile.length; i++) {
        d.append('images', imgFile[i]);
      }

      setFormData(d);
      console.log(formData);
    }

    axios
      .post(
        `${process.env.REACT_APP_SERVER_PORT}/resource/fileupdate?resourceNo=${state}`,
        formData,
        {
          headers: {
            Authorization: getCookie('accessToken'),
            'Content-Type': `multipart/form-data;`,
          },
        },
      )
      .then((res) => {
        console.log(res);
        console.log('파일 수정성공');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //삭제
  const deleteResource = async (state) => {
    console.log(state);
    const body = { resourceNo: state };
    await axios
      .post(`${process.env.REACT_APP_SERVER_PORT}/resource/delete`, body, {
        headers: {
          Authorization: getCookie('accessToken'),
        },
      })
      .then((res) => {
        console.log(res);
        alert('자원이 삭제되었습니다.');
        navigate('/admin/resource');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateResource = async (state) => {
    console.log(state);

    await axios
      .put(
        `${process.env.REACT_APP_SERVER_PORT}/resource/update?resourceNo=${state}`,
        {
          resourceName: resourceName,
          cateNo: cateNo,
          people: people,
          able: able,
          content: content,
          fuel: fuel,
          option: option,
          adminNo: 1,
          availableTime: fullTime
            ? fullTime
            : startHour + ':' + startMinute + ' ~ ' + endHour + ':' + endMinute,
        },
      )
      .then((res) => {
        alert('자원이 수정되었습니다.');
        navigate('/admin/resource');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {resource && (
        <Container>
          <ResourceContainer>{resourceName}</ResourceContainer>

          <ResourceContainer2>
            <ResourceForm>
              <form>
                <table>
                  <tr>
                    <Formtd>자원번호</Formtd> <Forminput> {state}</Forminput>
                  </tr>
                  <tr>
                    <Formtd>자원이름</Formtd>
                    <Forminput>
                      <input
                        type="text"
                        id="name"
                        defaultValue={resourceName}
                        onChange={handleResourceName}
                      />
                    </Forminput>
                  </tr>
                  <tr>
                    <Formtd>파일수정</Formtd>
                    <Forminput>
                      {detailsImgs
                        ? detailsImgs.map((item) => {
                            return (
                              <img
                                style={{ width: '100px' }}
                                alt="no img"
                                src={item}
                              ></img>
                            );
                          })
                        : fileList.map((item) => {
                            return (
                              <>
                                <img
                                  style={{ width: '100px' }}
                                  alt="no img"
                                  src={item.path}
                                ></img>
                              </>
                            );
                          })}

                      <input
                        type="file"
                        id="file"
                        multiple
                        name="image"
                        onChange={imagePreview}
                      />
                      <Button
                        variant="primary"
                        onClick={() => postImgae(state)}
                      >
                        확인
                      </Button>
                    </Forminput>
                  </tr>
                  <tr>
                    <Formtd>여부</Formtd>
                    <Forminput>
                      <td>
                        Y
                        <input
                          type="radio"
                          id="able"
                          value="Y"
                          checked={inputStatus}
                          onChange={handleAble}
                        />
                      </td>
                      <td>
                        N
                        <input
                          type="radio"
                          id="able"
                          value="N"
                          checked={!inputStatus}
                          onChange={handleAble}
                        />
                      </td>
                    </Forminput>
                  </tr>
                  {resource.cateNo === 1 ? (
                    <>
                      <tr>
                        <Formtd>인원</Formtd>
                        <Forminput>
                          <input
                            type="number"
                            id="people"
                            defaultValue={people}
                            onChange={handlePeople}
                          />
                        </Forminput>
                      </tr>
                      <tr>
                        <Formtd>위치</Formtd>
                        <Forminput>
                          <input
                            type="text"
                            id="location"
                            defaultValue={location}
                            onChange={handleLocation}
                          />
                        </Forminput>
                      </tr>
                    </>
                  ) : resource.cateNo === 2 ? (
                    <>
                      <tr>
                        <Formtd>연료</Formtd>
                        <Forminput>
                          <input
                            type="text"
                            id="fuel"
                            defaultValue={fuel}
                            onChange={handleFuel}
                          />
                        </Forminput>
                      </tr>
                      <tr>
                        <Formtd>개수</Formtd>
                        <Forminput>
                          <input
                            type="number"
                            id="people"
                            defaultValue={people}
                            onChange={handlePeople}
                          />
                        </Forminput>
                      </tr>
                    </>
                  ) : resource.cateNo === 3 ? (
                    <>
                      <tr>
                        <Formtd>개수</Formtd>
                        <Forminput>
                          <input
                            type="number"
                            id="people"
                            defaultValue={people}
                            onChange={handlePeople}
                          />
                        </Forminput>
                      </tr>
                    </>
                  ) : (
                    <></>
                  )}
                  <tr>
                    <Formtd>이용가능시간</Formtd>
                    <Forminput>
                      <Row>
                        <Col style={{ maxWidth: '150px' }}>시작시간 :</Col>
                        <Col>
                          <Form.Select
                            size="sm"
                            value={startHour}
                            onChange={ShandleHourTime}
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
                    </Forminput>
                  </tr>
                  <tr>
                    <Formtd>옵션</Formtd>
                    <Forminput>
                      <input
                        type="text"
                        id="option"
                        defaultValue={option}
                        onChange={handleOption}
                      />
                    </Forminput>
                  </tr>
                  <tr>
                    <Formtd>설명</Formtd>
                    <Forminput colSpan={2}>
                      <textarea
                        type="text"
                        id="content"
                        style={{ width: '500px', height: '100px' }}
                        defaultValue={content}
                        onChange={handleContent}
                      />
                    </Forminput>
                  </tr>
                </table>
                <ButtonContainer>
                  <Button
                    variant="secondary "
                    onClick={() => navigate('/admin/resource')}
                  >
                    뒤로
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => updateResource(state)}
                  >
                    확인
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteResource(state)}
                  >
                    삭제
                  </Button>
                </ButtonContainer>
              </form>
            </ResourceForm>
          </ResourceContainer2>
        </Container>
      )}
    </>
  );
};

export default ResourceDetail;
