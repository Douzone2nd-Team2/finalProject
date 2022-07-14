import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import { getCookie } from '../utils/cookie';

import {
  Container,
  TitleContainer,
  ContentContainer,
  InputContainer,
  CenterSort,
  ButtonContainer,
} from '../styles/Reset';

const Reset = () => {
  // 현재 비밀번호, 수정 비밀번호, 비밀번호 확인
  const [ppwd, setPpwd] = useState();
  const [npwd, setNpwd] = useState();
  const [cpwd, setCpwd] = useState();

  const navigate = useNavigate();

  const changePpwd = (e) => {
    setPpwd(e.target.value);
  };

  const changeNpwd = (e) => {
    setNpwd(e.target.value);
  };

  const changeCpwd = (e) => {
    setCpwd(e.target.value);
  };

  const resetPassword = () => {
    if (npwd !== cpwd) {
      alert('수정한 비밀번호와 확인 비밀번호가 일치하지 않습니다');
      return;
    }
    const data = {
      password: ppwd,
      chPassword: npwd,
    };
    try {
      axios
        .post(`${process.env.REACT_APP_SERVER_PORT}/mypage/changepw`, data, {
          headers: {
            Authorization: getCookie('accessToken'),
          },
        })
        .then((res) => {
          if (res.data.resCode === 2000) {
            alert('비밀번호 변경이 성공하였습니다.');
            navigate('/main');
          } else if (res.data.resCode === 2002) {
            alert(`현재 비밀번호가 불일치합니다.`);
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Container>
        <TitleContainer>비밀번호 변경</TitleContainer>
        <hr />
        <ContentContainer>
          비밀번호를 변경하여 개인정보를 보호하세요
        </ContentContainer>
        <form>
          <CenterSort>
            <label htmlFor="ppwd">현재 비밀번호</label>
            <InputContainer>
              <input
                type="password"
                name="ppwd"
                id="ppwd"
                value={ppwd}
                onChange={changePpwd}
              />
            </InputContainer>
          </CenterSort>
          <CenterSort>
            <label htmlFor="npwd">수정 비밀번호</label>
            <InputContainer>
              <input
                type="password"
                name="npwd"
                id="npwd"
                value={npwd}
                onChange={changeNpwd}
              />
            </InputContainer>
          </CenterSort>
          <CenterSort>
            <label htmlFor="cpwd">비밀번호 확인</label>
            <InputContainer>
              <input
                type="password"
                name="=cpwd"
                id="cpwd"
                value={cpwd}
                onChange={changeCpwd}
              />
            </InputContainer>
          </CenterSort>
          <ButtonContainer>
            <Button
              variant="secondary"
              onClick={() => {
                navigate(-1);
              }}
            >
              이전
            </Button>
            <Button variant="primary" onClick={resetPassword}>
              변경
            </Button>
          </ButtonContainer>
        </form>
      </Container>
    </>
  );
};

export default Reset;
