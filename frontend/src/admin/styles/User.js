import styled from 'styled-components';

const Container = styled.div`
  width: 85%;
  margin: auto;
`;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 4px solid black;
  padding-top: 10px;
  margin-left: 3%;
  Button {
    margin-top: 55px;
    height: 50px;
  }
`;

const TitleContainer = styled.div`
  margin-top: 67px;
  font-size: 30px;
  font-weight: 600;
  margin-left: 100px;
`;

const UserContainer = styled.div`
  width: 75%;
  margin-left: 15%;
  margin-top: 30px;
  background-color: #f6f6f6;
  border-radius: 15px;
  opacity: 0.9;
  font-family: NanumGothicBold;
`;

const NameContainer = styled.h1`
  margin-top: 5px;
  margin-left: 30px;
  padding-top: 15px;
  font-size: 30px;
  font-weight: 800;
`;

const ContentContainer = styled.div`
  margin-top: 30px;
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 800;
`;

const ImageContainer = styled.div`
  padding: 30px 10px 10px 10px;
  display: flex;
  label {
    position: relative;
    margin-left: 10%;
    min-width: 150px;
    vertical-align: top;
    /* margin-top: 2%; */
  }
  img {
    margin-top: 20px;
    width: 20%;
    height: auto;
  }
  .fileInput {
    display: flex;
    align-items: flex-end;
  }
  input {
    vertical-align: bottom;
    padding-left: 20px;
  }
`;

const ContentSort = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  label {
    margin-left: 10%;
    min-width: 150px;
  }
  input {
    margin-left: 1%;
  }
  select {
    margin-left: 1%;
    min-width: 230px;
  }
  button {
    margin-left: 1%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 20px;
  button {
    margin-left: 10px;
  }
`;

export {
  Container,
  HeadContainer,
  TitleContainer,
  ImageContainer,
  UserContainer,
  NameContainer,
  ContentContainer,
  ContentSort,
  ButtonContainer,
};
