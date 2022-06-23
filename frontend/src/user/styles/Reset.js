import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 68px;
  background-color: #f6f6f6;
  border-radius: 15px;
  opacity: 0.9;
  font-family: NanumGothicBold;
`;

const TitleContainer = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  padding-top: 15px;
  font-size: 30px;
  font-weight: 800;
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
    border: 1px solid black;
    margin-left: 20px;
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
  margin-left: -15px;
  Button {
    margin-left: 15px;
  }
  padding-bottom: 40px;
`;

export {
  Container,
  TitleContainer,
  ContentContainer,
  InputContainer,
  CenterSort,
  ButtonContainer,
};
