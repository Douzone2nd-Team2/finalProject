import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 68px;
  background-color: #f6f6f6;
  border-radius: 15px;
  opacity: 0.9;
  font-family: NanumGothicBold;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 16px;

  form {
    padding-top: 24px;
  }
`;

const TitleContainer = styled.h1`
  display: flex;
  justify-content: center;
  padding-top: 18px;
  padding-bottom: 2px;
  font-size: 30px;
  font-weight: 800;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
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
  padding: 42px 0px;
  Button {
    margin-left: 18px;
    width: 80px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  }
`;

export {
  Container,
  TitleContainer,
  ContentContainer,
  InputContainer,
  CenterSort,
  ButtonContainer,
};
