import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  font-family: 'NanumGothic';
`;

const LoginContainer = styled.div`
  display: flex;
  width: 55%;
  height: 60%;
  margin: auto;
  font-size: 12px;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  opacity: 0.8;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px lightgray;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: 400px;
    .login {
      display: none;
    }
    .loginBtn {
      margin-bottom: 30px;
    }
  }
`;

const RightContainer = styled.div`
  margin-right: 15%;
`;

const LoginTitle = styled.div`
  color: blue;
  font-weight: 900;
  font-size: 30px;
  padding-bottom: 15px;
`;

const ImageContainer1 = styled.div`
  img {
    width: 50vh;
    height: 100vh;
    display: block;
  }
`;

const ImageContainer2 = styled.div`
  img {
    margin: auto;
    display: block;
  }
`;

const ContentContainer = styled.div`
  margin: auto;
  label {
    font-size: 17px;
  }
`;

const InputContainer = styled.div`
  input {
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    width: 220px;
    height: 30px;
    background-color: aliceblue;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
  Button {
    width: 220px;
  }
`;

export {
  Container,
  LoginContainer,
  LoginTitle,
  ImageContainer1,
  ImageContainer2,
  InputContainer,
  ButtonContainer,
  ContentContainer,
  RightContainer,
};
