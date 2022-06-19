import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

import { tokenState } from '../recoil/Token';

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
  const [inputId, setInputId] = useState('');
  const [inputPwd, setInputPwd] = useState('');
  const [token, setToken] = useRecoilState(tokenState);
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

  const postLogin = () => {
    try {
      const data = {
        userId: inputId,
        password: inputPwd,
      };
      const res = axios
        .post(`http://localhost:8090/login`, data)
        .then((res) => {
          console.log(res);
          setToken(res.data.authorization);
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

  const loginBtn = () => {
    postLogin();
    handleClickResetBtn();
  };

  return (
    <Container>
      <LoginContainer>
        <ImageContainer>
          <img
            src={process.env.PUBLIC_URL + '/login.png'}
            alt="Logo"
            className="logo"
          />
        </ImageContainer>
        <div>
          <LoginTitle>자원 관리 시스템</LoginTitle>
          <FalseContainer>
            {isLogin && <div>잘못된 정보를 입력하셨습니다.</div>}
          </FalseContainer>
          <br />
          <form>
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
                <Button
                  variant="primary"
                  onClick={() => {
                    loginBtn();
                  }}
                >
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
