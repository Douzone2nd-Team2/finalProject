import { useEffect, useState } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCookie } from '../../utils/cookie';
import axios from 'axios';
import {
  Container,
  ResourceContainer,
  ResourceContainer2,
  ResourceForm,
  Forminput,
  ButtonContainer,
  Formtd,
} from '../../styles/Resource';

const ResourceDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
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
  const [detailsImgs, setDetailImgs] = useState('');

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

  // Full-Time
  const handleFullTime = (e) => {
    // setFull
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

  const onChangeAble = (e) => {
    if (e.target.value == 'Y') {
      setInputStatus(true);
    } else {
      setInputStatus(false);
    }
  };

  // const onChangeResource = (e) => {
  //   // setUpdateresource({
  //   //   ...updateresource,
  //   //   [e.target.id]: e.target.value,
  //   // });
  // };

  useEffect(() => {
    getResourceNo(state);
  }, []);

  const getResourceNo = async (state) => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PORT}/resource/detail?resourceNo=${state}`,
        { Authorization: getCookie('accessToken') },
      )
      .then((response) => {
        console.log(response.data.data);
        setResource(response.data.data.resource);
        setFileList(response.data.data.fileList);
        setInputStatus(response.data.data.resource.able === 'Y');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 파일 수정
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
      };
      reader.readAsDataURL(file);
    }
  };

  const postImgae = (e) => {
    if (imgFile.length > 0) {
      const d = new FormData();
      for (let i = 0; i < imgFile.length; i++) {
        d.append('image', imgFile[i]);
      }

      setFormData(d);
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
        alert(' 삭제되었습니다.');
        navigate('/admin/resource');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log state.path);

  const updateResource = async (state) => {
    console.log(state);
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_PORT}/resource/update?resourceNo=${state}`,
        {
          resourceNo: state,
          resourceName: resourceName,
          people: people,
          able: able,
          content: content,
          fuel: fuel,
          option: option,
          cateNo: resource.cateNo,
          adminNo: resource.adminNo,
        },
      )
      .then((res) => {
        // console.log();
        alert('수정성공!');
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
          <ResourceContainer>{resource.resourceName}</ResourceContainer>

          <ResourceContainer2>
            <ResourceForm>
              <table>
                <tr>
                  <Formtd>자원번호</Formtd>{' '}
                  <Forminput> {resource.resourceNo}</Forminput>
                </tr>
                <tr>
                  <Formtd>자원이름</Formtd>
                  <Forminput>
                    <input
                      type="text"
                      id="name"
                      defaultValue={resource.resourceName}
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
                    <Button variant="primary" onClick={() => postImgae(state)}>
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
                        onChange={onChangeAble}
                      />
                    </td>
                    <td>
                      N
                      <input
                        type="radio"
                        id="able"
                        value="N"
                        checked={!inputStatus}
                        onChange={onChangeAble}
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
                          defaultValue={resource.people}
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
                          defaultValue={resource.location}
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
                          defaultValue={resource.fuel}
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
                          defaultValue={resource.people}
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
                          defaultValue={resource.people}
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
                      <Col>시작시간:</Col>
                      <Col>
                        <Form.Select
                          size="sm"
                          onChange={ShandleTime}
                          value={time}
                        >
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
                        <Form.Select
                          size="sm"
                          onChange={EhandleTime}
                          value={Etime}
                        >
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
                      defaultValue={resource.option}
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
                      defaultValue={resource.content}
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
                <Button variant="primary" onClick={() => updateResource(state)}>
                  확인
                </Button>
                <Button variant="danger" onClick={() => deleteResource(state)}>
                  삭제
                </Button>
              </ButtonContainer>
            </ResourceForm>
          </ResourceContainer2>
        </Container>
      )}
    </>
  );
};

export default ResourceDetail;
