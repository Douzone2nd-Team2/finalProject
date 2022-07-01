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
  justify-content: space-around;
  align-items: center;
`;

const ImgContainer = styled.div`
  justify-content: center;
  align-items: center;
  img {
    padding: 30px;
    height: 300px;
  }
  margin-bottom: 30px;
`;

const ContentContainer = styled.div`
  display: flex;
  margin-bottom: 12px;
  margin-right: 50px;
  font-size: 18px;
`;

const KeyContainer = styled.div`
  font-weight: bold;
  min-width: 80px;
`;

const ValueContainer = styled.div`
  margin-left: 50px;
`;

export {
  Container,
  InfoContainer,
  TitleContainer,
  ImgContainer,
  ContentContainer,
  KeyContainer,
  ValueContainer,
};
