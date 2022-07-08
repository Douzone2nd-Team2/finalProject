import styled from 'styled-components';

const AllContainer = styled.div`
  font-family: NanumGothicBold;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0px 72px;
`;

const HeadContainer = styled.div`
  font-size: 30px;
  font-weight: 600;
  padding-top: 30px;
  border-bottom: 4px solid black;
`;

const TitleContainer = styled.div`
  /* margin-top: 67px; */
  font-size: 30px;
  font-weight: 600;
`;

const BookContainer = styled.div`
  width: 50%;
  margin-top: 30px;
  background-color: #f6f6f6;
  border-radius: 15px;
  opacity: 0.9;
  box-shadow: 1.5px 1.5px 1.5px 1.5px gray;
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
  background-color: #f6f6f6;
  button {
    border: none;
  }
`;

export {
  AllContainer,
  Container,
  HeadContainer,
  BookContainer,
  NameContainer,
  ContentContainer,
  ContentSort,
  ButtonContainer,
  MagnifyingGlass,
};
