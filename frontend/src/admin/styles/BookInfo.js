import styled from 'styled-components';

const Container = styled.div`
  font-family: 'NanumGothic';
`;
const TitleContainer = styled.h2`
  margin-left: 20px;
  margin-top: 50px;
  font-weight: 500;
  font-size: 25px;
`;

const TableContainer = styled.div`
  margin-left: 15px;
  margin-top: 30px;
  width: 450px;
  font-size: 13px;

  th {
    background-color: lightgray;
    width: 150px;
    text-align: center;
  }

  th:nth-child(1) {
    width: 100px;
  }
  th:nth-child(2) {
    width: 200px;
  }
  th:nth-child(3) {
    width: 200px;
  }

  td {
    text-align: center;
  }
  a {
    text-decoration: none;
  }
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
  Container,
  TitleContainer,
  TableContainer,
  StyledButton,
  StyledButton2,
  ButtonContainer,
};
