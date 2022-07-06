import styled from 'styled-components';

const Container = styled.div`
  /* width: 80%;
  margin: auto; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  margin: auto;
`;

const HeadContainer = styled.div`
  /* display: flex;
  justify-content: space-between;
  border-bottom: 4px solid black;
  padding-top: 10px;
  Button {
    margin-top: 55px;
    height: 50px;
  } */
  font-size: 30px;
  font-weight: 600;
  padding-top: 70px;
  border-bottom: 4px solid black;
  margin-left: 100px;
`;

const TitleContainer = styled.div`
  margin-top: 67px;
  font-size: 30px;
  font-weight: 600;
  margin-left: 100px;
`;

const BookContainer = styled.div`
  width: 50%;
  //margin: auto;
  margin-left: 18%;
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

const ContentSort = styled.div`
  margin-top: 10px;
  margin-left: 40px;
  display: flex;
  justify-content: flex-start;
  label {
    min-width: 150px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 20px;
`;

const MagnifyingGlass = styled.div`
  button {
    border: none;
  }
`;

export {
  Container,
  HeadContainer,
  TitleContainer,
  BookContainer,
  NameContainer,
  ContentContainer,
  ContentSort,
  ButtonContainer,
  MagnifyingGlass,
};
