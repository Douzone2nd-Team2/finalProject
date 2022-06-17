import { useState, useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { tokenState } from '../recoil/Token';
import axios from 'axios';
import {
  Container,
  LoginContainer,
  LoginTitle,
  ImageContainer,
  ButtonContainer,
  InputContainer,
  ContentContainer,
} from '../styles/Login';
import Button from 'react-bootstrap/Button';

const LoginPage = () => {
  const [inputId, setInputId] = useState('');
  const [inputPwd, setInputPwd] = useState('');
  const [token, setToken] = useRecoilState(tokenState);

  const handleChangeId = (e) => {
    setInputId(e.target.value);
  };

  const handleChangePwd = (e) => {
    setInputPwd(e.target.value);
  };

  const onReset = () => {
    setInputId('');
    setInputPwd('');
  };

  const postLogin = async () => {
    try {
      const data = {
        userId: inputId,
        password: inputPwd,
      };
      const res = await axios
        .post(`http://localhost:8090/login`, data)
        .then((res) => console.log(res.headers.authorization));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(inputId);
  }, [inputId]);

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
          <form>
            <ContentContainer>
              <div>ID</div>
              <InputContainer>
                <input
                  type="text"
                  name="id"
                  placeholder="아이디를 입력하세요"
                  onChange={handleChangeId}
                  value={inputId}
                />
              </InputContainer>
              <br />
              <div>PW</div>
              <InputContainer>
                <input
                  type="password"
                  name="password"
                  placeholder="비밀번호를 입력하세요"
                  onChange={handleChangePwd}
                  value={inputPwd}
                />
              </InputContainer>
              <ButtonContainer>
                <Button
                  variant="primary"
                  onClick={() => {
                    postLogin();
                    onReset();
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
