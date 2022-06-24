import styled from 'styled-components';

const Container = styled.div`
  width: 45%;
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

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px 0 30px 0;
`;

const ImgContainer = styled.div`
  justify-content: center;
  align-items: center;
  img {
    padding: 30px;
    margin-right: 50px;
    height: 300px;
  }
  margin-bottom: 30px;
`;

const ContentContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
  label {
    font-weight: bold;
    min-width: 75px;
  }
  input {
    border: 1px solid black;
  }
  input:focus {
    outline: none;
  }
`;

export {
  Container,
  InfoContainer,
  TitleContainer,
  ImgContainer,
  ContentContainer,
};
