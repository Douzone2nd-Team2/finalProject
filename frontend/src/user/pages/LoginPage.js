import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';

import { tokenState } from '../recoil/Token';

import Button from 'react-bootstrap/Button';

import {
  Container,
  LoginContainer,
  LoginTitle,
  ImageContainer,
  ButtonContainer,
  InputContainer,
  ContentContainer,
  FalseContainer,
} from '../styles/Login';

const LoginPage = () => {
  const setToken = useSetRecoilState(tokenState);

  const [inputId, setInputId] = useState('');
  const [inputPwd, setInputPwd] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  const handleChangeId = (e) => {
    setInputId(e.target.value);
  };

  const handleChangePwd = (e) => {
    setInputPwd(e.target.value);
  };

  const handleClickResetBtn = () => {
    setInputId('');
    setInputPwd('');
  };

  const loginBtn = (e) => {
    e.preventDefault();

    handleClickResetBtn();
    postLogin();
  };

  const postLogin = () => {
    try {
      const data = {
        userId: inputId,
        password: inputPwd,
      };
      axios.post(`http://localhost:8090/login`, data).then((res) => {
        setToken(res.headers.authorization);
        if (res.data.resCode === 0) {
          navigate('/main');
        } else {
          setIsLogin(true);
          console.log('로그인 실패');
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <LoginContainer>
        <ImageContainer>
          <img src={process.env.PUBLIC_URL + '/login.png'} alt="Logo" />
        </ImageContainer>
        <div>
          <LoginTitle>자원 관리 시스템</LoginTitle>
          <FalseContainer>
            {isLogin && <div>잘못된 정보를 입력하셨습니다.</div>}
          </FalseContainer>
          <br />
          <form onSubmit={loginBtn}>
            <ContentContainer>
              <label htmlFor="id">ID</label>
              <InputContainer>
                <input
                  type="text"
                  name="id"
                  id="id"
                  placeholder="아이디를 입력하세요"
                  onChange={handleChangeId}
                  value={inputId}
                />
              </InputContainer>
              <br />
              <label htmlFor="pwd">PWD</label>
              <InputContainer>
                <input
                  type="password"
                  name="password"
                  id="pwd"
                  placeholder="비밀번호를 입력하세요"
                  onChange={handleChangePwd}
                  value={inputPwd}
                />
              </InputContainer>
              <ButtonContainer>
                <Button variant="primary" type="submit">
                  로그인
                </Button>
              </ButtonContainer>
            </ContentContainer>
          </form>
        </div>
      </LoginContainer>
    </Container>
  );
};

export default LoginPage;
