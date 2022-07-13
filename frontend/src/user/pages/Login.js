import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';

import { getCookie } from '../utils/cookie';

import logo from '../assets/logo.png';
import login from '../assets/login.png';

import { userState } from '../recoil/user';

import Button from 'react-bootstrap/Button';

import {
  Container,
  LoginContainer,
  LoginTitle,
  ImageContainer1,
  ImageContainer2,
  ButtonContainer,
  InputContainer,
  ContentContainer,
  RightContainer,
} from '../styles/Login';

const Login = () => {
  const setUser = useSetRecoilState(userState);

  const [inputId, setInputId] = useState('');
  const [inputPwd, setInputPwd] = useState('');

  const navigate = useNavigate();

  const [cookies, setCookie] = useCookies(['accessToken']);

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

  const postLogin = async () => {
    try {
      const data = {
        userId: inputId,
        password: inputPwd,
        able: 'user',
      };

      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_PORT}/login`,
        data,
      );

      if (res.data.resCode === 0) {
        setCookie('accessToken', res.headers.authorization);
        console.log(res);
      } else {
        alert(`잘못된 정보를 입력하셨습니다.`);
        return;
      }

      const userData = await axios.get(
        `${process.env.REACT_APP_SERVER_PORT}/mypage/user`,
        {
          headers: {
            Authorization: getCookie('accessToken'),
          },
        },
      );
      console.log(userData);
      setUser({
        userId: userData.data.data[0].userId,
        birth: userData.data.data[0].birth,
        deptName: userData.data.data[0].deptName,
        email: userData.data.data[0].email,
        empNo: userData.data.data[0].empNo,
        gradeName: userData.data.data[0].gradeName,
        name: userData.data.data[0].name,
        no: userData.data.data[0].no,
        phone: userData.data.data[0].phone,
        imageUrl: userData.data.data[0].imageUrl,
      });

      navigate('/main');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <LoginContainer>
        <ImageContainer1>
          <img src={login} alt="Login" className="login" />
        </ImageContainer1>
        <RightContainer>
          <ImageContainer2>
            <img src={logo} alt="Logo" />
          </ImageContainer2>
          <LoginTitle>자원 관리 시스템</LoginTitle>
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
                <Button variant="primary" type="submit" className="loginBtn">
                  LOGIN
                </Button>
              </ButtonContainer>
            </ContentContainer>
          </form>
        </RightContainer>
      </LoginContainer>
    </Container>
  );
};

export default Login;
