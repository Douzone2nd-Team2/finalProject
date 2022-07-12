import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: auto;
`;

const HeadContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  border-bottom: 4px solid black;
`;

const TitleContainer = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  text-align: center;

  table {
    width: 100%;
    border: none;
  }
  th {
    background-color: lightgray;
  }
  td {
    border-bottom: 1px solid gray;
  }
  Button {
    margin-left: 5px;
    padding: 3px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0px 72px;
`;

const StyledButton = styled.button`
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
const StyledButton2 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  min-height: 36px;
  margin: 3px;
  padding: 8px;
  cursor: pointer;
  touch-action: manipulation;
  background: #ed3613;
  color: #f1f1f1;
  font-weight: 600;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 32px;
  padding: 6px 4px;
`;

export {
  FlexContainer,
  Container,
  HeadContainer,
  TitleContainer,
  TableContainer,
  StyledButton,
  StyledButton2,
  ButtonContainer,
};
