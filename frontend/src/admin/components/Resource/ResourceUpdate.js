import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
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
  const [img, setImage] = useState('');
  const [resourceName, setResourceName] = useState('');
  const [location, setLocation] = useState('');
  const [people, setPeople] = useState('');
  const [time, setTime] = useState('');
  // const [startTime, setStartTime] = useState('');
  // const [endTime, setEndTime] = useState('');
  const [option, setOption] = useState('');
  const [fuel, setFuel] = useState('');
  const [content, setContent] = useState('');
  const [able, setAble] = useState('');
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
  // const handleStartTime = (e) => {
  //   setStartTime(e.target.value);
  // };
  // const handleEndTime = (e) => {
  //   setEndTime(e.target.value);
  // };
  // const handleTime = (e) => {
  //   setTime(e.target.value);
  // };
  const handleOption = (e) => {
    setOption(e.target.value);
  };
  const handleFuel = (e) => {
    setFuel(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };

  // const handleChangeFile = (e) => {
  //   setImgFile(e.target.file);
  //   console.log('img' + imgFile);
  // };

  const onChangeAble = (e) => {
    if (e.target.value == 'Y') {
      setInputStatus(true);
    } else {
      setInputStatus(false);
    }
  };

  const onChangeResource = (e) => {
    // setUpdateresource({
    //   ...updateresource,
    //   [e.target.id]: e.target.value,
    // });
  };

  useEffect(() => {
    getResourceNo(state);
  }, []);

  const getResourceNo = async (state) => {
    // console.log(resourceNo);
    // const param = { resourceNo: resourceNo };
    console.log(state);
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PORT}/resource/detail?resourceNo=${state}`,
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
  const imageUpdate = async (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    new Promise((reslove) => {
      reader.onload = () => {
        setImage(reader.result);
      };
    });

    if (imgFile.length > 0) {
      const d = new FormData();
      for (let i = 0; i < imgFile.length; i++) {
        d.append('image', imgFile[i]);
      }

      setFormData(d);
    }

    await axios
      .post(
        `${process.env.REACT_APP_SERVER_PORT}/resource/fileupdate?resourceNo=}`,
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

  //그냥 삭제
  const deleteResource = async (state) => {
    await axios
      .post(
        `${process.env.REACT_APP_SERVER_PORT}/resource/delete?resourceNo=${state}`,
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
                    {fileList.map((item) => {
                      return (
                        <>
                          <img
                            style={{ width: '100px' }}
                            alt="no img"
                            src={item.path ? item.path : ''}
                          ></img>
                        </>
                      );
                    })}
                    <input
                      type="file"
                      id="file"
                      multiple
                      name="image"
                      onChange={imageUpdate}
                    />
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
                          onChange={onChangeResource}
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
                          onChange={onChangeResource}
                        />
                      </Forminput>
                    </tr>
                  </>
                ) : (
                  <></>
                )}
                <tr>
                  <Formtd>이용가능시간</Formtd>
                  {/* <Forminput>
                    <input
                      type="time"
                      id="startTime"
                      defaultValue={startTime}
                      onChange={startTimeChange}
                    />
                    ~
                    <input
                      type="time"
                      id="endTime"
                      defaultValue={endTime}
                      onChange={endTimeChange}
                    />
                  </Forminput> */}
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
