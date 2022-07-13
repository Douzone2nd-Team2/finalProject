import styled from 'styled-components';

const AllContainer = styled.div`
  font-family: NanumGothicBold;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  margin: auto;
`;

const HeadContainer = styled.div`
  font-size: 30px;
  font-weight: 600;
  padding-top: 70px;
  border-bottom: 4px solid black;
  margin-left: 5px;
`;

const BookContainer = styled.div`
  width: 80%;
  margin-top: 30px;
  margin-left: 10%;
  background-color: #f6f6f6;
  border-radius: 15px;
  opacity: 0.9;
  box-shadow: 1.5px 1.5px 1.5px 1.5px gray;
`;

const InputContainer = styled.div`
  input:nth-child(2) {
    margin-left: 20px;
  }
`;

const NameContainer = styled.h1`
  margin-top: 5px;
  margin-left: 30px;
  padding-top: 15px;
  font-size: 22px;
  font-weight: 800;
  display: flex;
  justify-content: space-between;
`;

const CategoryContainer = styled.span`
  background-color: blue;
  color: white;
  font-size: 14px;
  padding: 7px;
  border-radius: 20px;
  margin-right: 15px;
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

const UserContentSort = styled.div`
  margin-top: 15px;
  display: flex;

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

const StyledButton = styled.button`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  min-height: 36px;
  margin: 3px;
  padding: 8px;
  cursor: pointer;
  touch-action: manipulation;
  background: #1296ec;
  color: #f1f1f1;
  font-weight: 600;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 16px;
`;

export {
  AllContainer,
  Container,
  HeadContainer,
  InputContainer,
  CategoryContainer,
  ContentContainer,
  BookContainer,
  NameContainer,
  ContentSort,
  ButtonContainer,
  MagnifyingGlass,
  UserContentSort,
  StyledButton,
};
