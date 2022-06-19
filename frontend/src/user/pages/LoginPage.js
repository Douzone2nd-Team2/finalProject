import { useState, useEffect } from 'react';
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
  const [isRedriect, setIsRedirect] = useState(false);

  const handleId = (e) => {
    setInputId(e.target.value);
  };

  const handlePwd = (e) => {
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
      await axios.post(`http://localhost:8090/login`, data).then((res) => {
        //console.log(data);
        console.log(res);
      });
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
                  onChange={handleId}
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
                  onChange={handlePwd}
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
