import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
  height: 600px;
  margin: auto;
  margin-top: 30px;
  background-color: aliceblue;
  opacity: 0.9;
`;

const TitleContainer = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  padding-top: 15px;
  font-weight: 800;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
`;

const ImgContainer = styled.div`
  justify-content: center;
  align-items: center;
  img {
    padding: 20px;
    height: 320px;
  }
  margin-bottom: 15px;
`;

const ContentContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  label {
    font-weight: bold;
  }
  input {
    margin-left: 30px;
    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px silver;
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
