import styled from 'styled-components';

const Container = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 30px;
  background-color: lightgray;
  border-radius: 15px;
  opacity: 0.7;
`;

const TitleContainer = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  padding-top: 15px;
  font-weight: 800;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  img {
    border-radius: 5px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 800;
`;

const InputContainer = styled.div`
  input {
    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px gray;
    margin-left: 50px;
  }
`;

const CenterSort = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-left: -60px;
  Button {
    margin-left: 50px;
  }
  padding-bottom: 40px;
`;

export {
  Container,
  TitleContainer,
  ImgContainer,
  ContentContainer,
  InputContainer,
  CenterSort,
  ButtonContainer,
};
