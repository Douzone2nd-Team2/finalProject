import styled from 'styled-components';

// const AllContainer = styled.div`
//   font-family: NanumGothicBold;
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 1000px;
//   padding: 0px 72px;
// `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1000px;
  padding: 0px 72px;
  /* display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  margin: auto; */
  /* display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%; */
`;

const HeadContainer = styled.div`
  font-size: 30px;
  padding-bottom: 12px;
  font-weight: 600;
  padding-top: 30px;
  border-bottom: 4px solid black;
`;

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 30px;
`;

const BookContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  background-color: #f6f6f6;
  border-radius: 15px;
  opacity: 0.9;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 16px;
  padding: 24px;
`;

const InputContainer = styled.div`
  input:nth-child(2) {
    margin-left: 20px;
  }
`;

const NameContainer = styled.h1`
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

const ResourceSearchButton = styled.div``;

export {
  // AllContainer,
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
  ResourceSearchButton,
  StyledButton,
};
