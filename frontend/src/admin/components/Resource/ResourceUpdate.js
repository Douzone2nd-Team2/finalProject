import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const location = useLocation();
  const [inputStatus, setInputStatus] = useState(false);

  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [updateresource, setUpdateresource] = useState({
    name: location.state.resourceName,
    able: location.state.able,
    content: location.state.content,
    fuel: location.state.fuel,
    location: location.state.location,
    people: location.state.people,
    option: location.state.option,
    availableTime: startTime + ' ~ ' + endTime,
  });

  const startTimeChange = (e) => {
    setStartTime(e.target.value);
  };
  const endTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const onChangeInput = (e) => {
    setInputStatus(!inputStatus);
  };
  const handleChangeFile = (e) => {};
  const onChangeResource = (e) => {
    setUpdateresource({
      ...updateresource,
      [e.target.id]: e.target.value,
    });
  };

  const deleteResource = async () => {
    await axios
      .post(
        `${process.env.REACT_APP_SERVER_PORT}/resource/delete?resourceNo=${location.state.resourceNo}`,
      )
      .then((res) => {
        console.log(res);
        alert(location.state.resourceName + ' 삭제되었습니다.');
        navigate('/admin/resource');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateResource = async () => {
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_PORT}/resource/update?resourceNo=${location.state.resourceNo}`,
        {
          resourceNo: location.state.resourceNo,
          resourceName: updateresource.name,
          people: updateresource.people,
          able: updateresource.able,
          content: updateresource.content,
          fuel: updateresource.fuel,
          location: updateresource.location,
          option: updateresource.option,
          cateNo: location.state.cateNo,
          adminNo: 1,
          availableTime: updateresource.availableTime,
        },
      )
      .then((res) => {
        console.log(res);
        alert(location.state.resourceName + ' 수정되었습니다.');
        navigate('/admin/resource');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Container>
        <ResourceContainer>
          자원수정 : {location.state.resourceName}
        </ResourceContainer>
        <ResourceContainer2>
          <ResourceForm>
            <table>
              <tr>
                <Formtd>자원번호</Formtd>{' '}
                <Forminput>{location.state.resourceNo}</Forminput>
              </tr>
              <tr>
                <Formtd>자원이름</Formtd>
                <Forminput>
                  <input
                    type="text"
                    id="name"
                    value={updateresource.name}
                    onChange={onChangeResource}
                  />
                </Forminput>
              </tr>
              <tr>
                <Formtd>파일수정</Formtd>
                <Forminput>
                  <input
                    type="file"
                    id="file"
                    multiple
                    name="image"
                    onChange={handleChangeFile}
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
                      onChange={(onChangeResource, onChangeInput)}
                    />
                  </td>
                  <td>
                    N
                    <input
                      type="radio"
                      id="able"
                      value="N"
                      checked={!inputStatus}
                      onChange={(onChangeResource, onChangeInput)}
                    />
                  </td>
                </Forminput>
              </tr>
              {location.state.cateNo === 1 ? (
                <>
                  <tr>
                    <Formtd>인원</Formtd>
                    <Forminput>
                      <input
                        type="number"
                        id="people"
                        value={updateresource.people}
                        onChange={onChangeResource}
                      />
                    </Forminput>
                  </tr>
                  <tr>
                    <Formtd>위치</Formtd>
                    <Forminput>
                      <input
                        type="text"
                        id="location"
                        value={updateresource.location}
                        onChange={onChangeResource}
                      />
                    </Forminput>
                  </tr>
                </>
              ) : location.state.cateNo === 2 ? (
                <>
                  <tr>
                    <Formtd>연료</Formtd>
                    <Forminput>
                      <input
                        type="text"
                        id="fuel"
                        value={updateresource.fuel}
                        onChange={onChangeResource}
                      />
                    </Forminput>
                  </tr>
                  <tr>
                    <Formtd>개수</Formtd>
                    <Forminput>
                      <input
                        type="number"
                        id="people"
                        value={updateresource.people}
                        onChange={onChangeResource}
                      />
                    </Forminput>
                  </tr>
                </>
              ) : location.state.cateNo === 3 ? (
                <>
                  <tr>
                    <Formtd>개수</Formtd>
                    <Forminput>
                      <input
                        type="number"
                        id="people"
                        value={updateresource.people}
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
                <Forminput>
                  <input
                    type="time"
                    id="startTime"
                    value={startTime}
                    onChange={startTimeChange}
                  />
                  ~
                  <input
                    type="time"
                    id="endTime"
                    value={endTime}
                    onChange={endTimeChange}
                  />
                </Forminput>
              </tr>
              <tr>
                <Formtd>옵션</Formtd>
                <Forminput>
                  <input
                    type="text"
                    id="option"
                    value={updateresource.option}
                    onChange={onChangeResource}
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
                    value={updateresource.content}
                    onChange={onChangeResource}
                  />
                </Forminput>
              </tr>
            </table>
            <ButtonContainer>
              <Button variant="primary" onClick={updateResource}>
                확인
              </Button>
              <Button variant="danger" onClick={deleteResource}>
                삭제
              </Button>
            </ButtonContainer>
          </ResourceForm>
        </ResourceContainer2>
      </Container>
    </>
  );
};

export default ResourceDetail;
