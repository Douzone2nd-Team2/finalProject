import { useEffect, useState } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCookie } from '../utils/cookie';

import { arrayIsEmpty } from '../utils/jsFunction';
import axios from 'axios';
import {
  Container,
  ResourceContainer,
  ResourceContainer2,
  ContentSort,
  ButtonContainer,
  ResourceImg,
  AllContainer,
  ContentContainer,
  BookContainer,
  WrapperContainer,
  FileInputAndButtonContainer,
} from '../styles/Resource';

import Slider from 'react-slick';

import SampleNextArrow from '../../user/components/Book/SampleNextArrow';
import SamplePrevArrow from '../../user/components/Book/SamplePrevArrow';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <SamplePrevArrow className="slick-prev" />,
  nextArrow: <SampleNextArrow className="slick-next" />,
};

const ResourceDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [inputStatus, setInputStatus] = useState(false);
  const [isfullTime, setIsfullTime] = useState(false);

  const [resource, setResource] = useState([]);
  const [fileList, setFileList] = useState([]);

  const [imgFile, setImgFile] = useState([]);
  const [formData, setFormData] = useState(new FormData());

  //image preview
  const [image, setImage] = useState('');

  const [resourceName, setResourceName] = useState('');
  const [location, setLocation] = useState('');
  const [people, setPeople] = useState('');

  const [startHour, setStartHour] = useState('00');
  const [startMinute, setStartMinute] = useState('00');

  const [endHour, setEndHour] = useState('00');
  const [endMinute, setEndMinute] = useState('00');

  const [availableTime, setAvailableTime] = useState('00');

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

    if (!isfullTime) {
      setFulltime(e.target.value);
      setIsfullTime(true);
      setAvailableTime('');

      setStartHour('00');
      setStartMinute('00');
      setEndMinute('00');
      setEndHour('00');
    } else {
      setIsfullTime(false);
      setAvailableTime('');

      if (startMinute) {
        setStartMinute(startMinute);
      } else {
        setStartMinute('00');
      }

      setStartHour(startHour);

      setEndHour(endHour);
      setEndMinute(endMinute);
    }
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
    } else {
      setInputStatus(false);
      setAble('N');
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

  useEffect(() => {
    if (availableTime === 'Full-time') {
      setStartHour('00');
      setStartMinute('00');
      setEndHour('00');
      setEndMinute('00');
    } else {
      setStartHour(availableTime.substring(0, 2));
      setStartMinute(availableTime.substring(3, 5));

      setEndHour(availableTime.substring(8, 10));
      setEndMinute(availableTime.substring(11, 13));
    }
  }, [availableTime]);

  const getResourceNo = async (state) => {
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
        setAvailableTime(response.data.data.resource.availableTime);
        if (response.data.data.resource.availableTime === 'Full-time') {
          setIsfullTime(true);
        }

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
        fileURLs[i] = reader.result;
        setDetailImgs([...fileURLs]);
        setImgFile(e.target.files);
      };
      reader.readAsDataURL(file);
    }
  };

  // 파일수정
  const postImgae = (e) => {
    if (imgFile.length > 0) {
      const d = new FormData();
      for (let i = 0; i < imgFile.length; i++) {
        d.append('images', imgFile[i]);
      }
      var resourceNo = {
        resourceNo: state,
      };

      d.append(
        'resourceNo',
        new Blob([JSON.stringify(resourceNo)], { type: 'application/json' }),
      );

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
        alert('파일이 수정되었습니다.');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //삭제
  const deleteResource = async (state) => {
    const body = { resourceNo: state };
    await axios
      .post(`${process.env.REACT_APP_SERVER_PORT}/resource/delete`, body, {
        headers: {
          Authorization: getCookie('accessToken'),
        },
      })
      .then((res) => {
        alert('자원이 삭제되었습니다.');
        navigate('/admin/resource');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateResource = async (state) => {
    var sm = '';
    var sh = '';
    var eh = '';
    var em = '';

    if (startMinute == '') {
      sm = '00';
    } else {
      sm = startMinute;
    }
    if (startHour == '') {
      sh = '00';
    } else {
      sh = startHour;
    }
    if (endHour == '') {
      eh = '00';
    } else {
      eh = endHour;
    }
    if (endMinute == '') {
      em = '00';
    } else {
      em = endMinute;
    }
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_PORT}/resource/update?resourceNo=${state}`,
        {
          resourceName: resourceName,
          location: location,
          cateNo: cateNo,
          people: people,
          able: able,
          content: content,
          fuel: fuel,
          option: option,
          adminNo: 1,
          availableTime: fullTime
            ? fullTime
            : sh + ':' + sm + ' ~ ' + eh + ':' + em,
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
    <Container>
      <ResourceContainer>자원수정</ResourceContainer>
      <WrapperContainer>
        <ResourceContainer2>
          <BookContainer>
            <ContentContainer>
              <form>
                <ContentSort>
                  자원이름
                  <input
                    type="text"
                    id="name"
                    defaultValue={resourceName}
                    onChange={handleResourceName}
                  />
                </ContentSort>
                <ContentSort>
                  여부 Y
                  <input
                    className="Rable"
                    type="radio"
                    id="able"
                    value="Y"
                    checked={inputStatus}
                    onChange={handleAble}
                  />
                  N
                  <input
                    type="radio"
                    className="Rable"
                    id="able"
                    value="N"
                    checked={!inputStatus}
                    onChange={handleAble}
                  />
                </ContentSort>
                {cateNo === 1 ? (
                  <>
                    <ContentSort>
                      인원
                      <input
                        type="number"
                        id="people"
                        defaultValue={people}
                        onChange={handlePeople}
                      />
                    </ContentSort>
                    <ContentSort>
                      위치
                      <input
                        type="text"
                        id="location"
                        defaultValue={location}
                        onChange={handleLocation}
                      />
                    </ContentSort>
                  </>
                ) : cateNo === 2 ? (
                  <>
                    <ContentSort>
                      연료
                      <input
                        type="text"
                        id="fuel"
                        defaultValue={fuel}
                        onChange={handleFuel}
                      />
                    </ContentSort>
                    <ContentSort>
                      개수
                      <input
                        type="number"
                        id="people"
                        defaultValue={people}
                        onChange={handlePeople}
                      />
                    </ContentSort>
                  </>
                ) : cateNo === 3 ? (
                  <>
                    <ContentSort>
                      개수
                      <input
                        type="number"
                        id="people"
                        defaultValue={people}
                        onChange={handlePeople}
                      />
                    </ContentSort>
                  </>
                ) : (
                  <></>
                )}
                <ContentSort>
                  이용가능시간 &nbsp;
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
                          checked={isfullTime}
                          onChange={handleFullTime}
                        />
                      </Col>
                    </Row>
                  </Row>
                </ContentSort>
                <ContentSort>
                  옵션
                  <input
                    type="text"
                    id="option"
                    defaultValue={option}
                    onChange={handleOption}
                  />
                </ContentSort>
                <ContentSort>
                  설명
                  <textarea
                    type="text"
                    id="content"
                    style={{ width: '600px', height: '200px' }}
                    defaultValue={content}
                    onChange={handleContent}
                  />
                </ContentSort>
              </form>
            </ContentContainer>
            <ResourceImg>
              {detailsImgs
                ? detailsImgs.map((item) => {
                    return (
                      <div>
                        <img alt="no img" src={item}></img>
                      </div>
                    );
                  })
                : fileList.map((item) => {
                    return (
                      <div>
                        <img alt="no img" src={item.path}></img>
                      </div>
                    );
                  })}
            </ResourceImg>
            <FileInputAndButtonContainer>
              <input
                type="file"
                id="file"
                multiple
                name="image"
                onChange={imagePreview}
              />
              <Button
                variant="primary"
                style={{ width: '80px' }}
                onClick={() => {
                  postImgae(state);
                }}
              >
                upload
              </Button>
            </FileInputAndButtonContainer>
          </BookContainer>

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
        </ResourceContainer2>
      </WrapperContainer>
    </Container>
  );
};

export default ResourceDetail;
