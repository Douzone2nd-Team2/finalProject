import styled from 'styled-components';

const Container = styled.div`
  /* width: 80%;
  margin: auto; */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0px 72px;
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
  padding-top: 30px;
  border-bottom: 4px solid black;
`;
const TitleContainer = styled.div`
  background-color: #f6f6f6;
  margin-top: 20px;
  width: 1075px;
  box-shadow: 1px 1px #e2e2e2;
`;

const TableContainer = styled.div`
  width: fit-content;
  height: 100%;
  padding: 30px 24px;

  table {
    width: 100%;
    //margin-left: 100px;
    th {
      background-color: lightgray;
      width: 200px;
    }
    /* th:nth-child(2) {
    }
    th:nth-child(3) {
      width: 200px;
    } */
    td {
      border-bottom: 1px solid black;
    }
  }
`;

export { Container, HeadContainer, TitleContainer, TableContainer };
