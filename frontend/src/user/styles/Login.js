import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  display: flex;
  align-items: center;
`;

const LoginContainer = styled.div`
  display: flex;
  margin-top: 50px;
  width: 60%;
  height: 60%;
  margin: auto;
  font-size: 12px;
  overflow: hidden;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  opacity: 0.8;
  border-radius: 5px;
  box-shadow: 10px 10px 10px 10px lightgray;
`;

const LoginTitle = styled.div`
  color: blue;
  font-weight: 900;
  font-size: 30px;
  padding-bottom: 30px;
`;

const ImageContainer = styled.div`
  img {
    width: 165%;
    height: 165%;
    margin-left: -70px;
    display: block;
  }
`;

const ContentContainer = styled.div`
  margin: auto;
`;

const InputContainer = styled.div`
  input {
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    background-color: aliceblue;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
`;

export {
  Container,
  LoginContainer,
  LoginTitle,
  ImageContainer,
  InputContainer,
  ButtonContainer,
  ContentContainer,
};
