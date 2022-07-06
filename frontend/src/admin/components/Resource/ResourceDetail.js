import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  ResourceContainer,
  ResourceForm,
} from '../../styles/Resource';

const ResourceDetail = () => {
  const location = useLocation();
  const [isEdit, setIsEdit] = useState(false);
  const [updateresource, setUpdateresource] = useState({
    name: '',
    able: '',
    content: '',
    fuel: '',
    location: '',
    people: '',
    option: '',
    availableTime: '',
  });

  const editResource = () => setIsEdit(!isEdit);

  const onChangeResource = (e) => {
    setUpdateresource({
      ...updateresource,
      [e.target.id]: e.target.value,
    });
  };

  const deleteResource = () => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_PORT}/resource/delete?resourceNo=${location.state.resourceNo}`,
      )
      .then((res) => {
        console.log(res);
        alert('삭제성공!');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateResource = () => {
    axios
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
          // adminNo: 1,
          availableTime: updateresource.availableTime,
        },
      )
      .then((res) => {
        console.log(res);
        alert('수정성공!');
        setIsEdit(!isEdit);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container>
        <ResourceContainer>
          자원이름 : {location.state.resourceName}
        </ResourceContainer>

        <ResourceForm>
          {isEdit ? (
            <>
              <p>자원번호: {location.state.resourceNo}</p>
              <p>
                자원이름:{' '}
                <input
                  type="text"
                  id="name"
                  value={updateresource.name}
                  onChange={onChangeResource}
                />
              </p>
              <p>
                여부 : Y{' '}
                <input
                  type="radio"
                  id="able"
                  value="Y"
                  onChange={onChangeResource}
                />{' '}
                N{' '}
                <input
                  type="radio"
                  id="able"
                  value="N"
                  onChange={onChangeResource}
                />
              </p>
              <p>
                설명 :{' '}
                <input
                  type="text"
                  id="content"
                  value={updateresource.content}
                  onChange={onChangeResource}
                />
              </p>
              {location.state.cateNo === 1 ? (
                <>
                  <p>
                    인원:{' '}
                    <input
                      type="number"
                      id="people"
                      value={updateresource.people}
                      onChange={onChangeResource}
                    />
                  </p>
                  <p>
                    위치:{' '}
                    <input
                      type="text"
                      id="location"
                      value={updateresource.location}
                      onChange={onChangeResource}
                    />
                  </p>
                </>
              ) : location.state.cateNo === 2 ? (
                <>
                  <p>
                    연료:{' '}
                    <input
                      type="text"
                      id="fuel"
                      value={updateresource.fuel}
                      onChange={onChangeResource}
                    />
                  </p>
                  <p>
                    개수:{' '}
                    <input
                      type="number"
                      id="people"
                      value={updateresource.people}
                      onChange={onChangeResource}
                    />
                  </p>
                </>
              ) : location.state.cateNo === 3 ? (
                <>
                  <p>
                    개수:{' '}
                    <input
                      type="number"
                      id="people"
                      value={updateresource.people}
                      onChange={onChangeResource}
                    />
                  </p>
                </>
              ) : (
                <></>
              )}

              <p>
                이용가능시간: <input type="time" /> ~
                <input type="time" />
              </p>
              <p>
                옵션:{' '}
                <input
                  type="text"
                  id="option"
                  value={updateresource.option}
                  onChange={onChangeResource}
                />
              </p>
              <button onClick={updateResource}>확인</button>
              <button onClick={editResource}>Back</button>
              <button onClick={deleteResource}>삭제</button>
            </>
          ) : (
            <>
              <p>자원번호 : {location.state.resourceNo}</p>
              <p>여부 : {location.state.able}</p>
              <p>설명 : {location.state.content}</p>
              {location.state.location == null ? (
                ''
              ) : (
                <p>위치 : {location.state.location}</p>
              )}
              {location.state.people == null ? (
                ''
              ) : (
                <p>인원 : {location.state.people}</p>
              )}
              {location.state.fuel == null ? (
                ''
              ) : (
                <p>연료 : {location.state.fuel}</p>
              )}
              <p>관리자번호 : {location.state.adminNo}</p>
              <p>생성일 : {location.state.createAt}</p>
              <p>수정일 : {location.state.modifyAt}</p>
              <button onClick={editResource}>수정</button>
              <button onClick={deleteResource}>삭제</button>
            </>
          )}
        </ResourceForm>
      </Container>
    </>
  );
};

export default ResourceDetail;
