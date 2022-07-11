import styled from 'styled-components';

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
      padding: 5px;
      border-bottom: 1px solid black;
    }
  }
`;

const ReservationButton = styled.button`
  width: 100px;
  font-size: 12px;
  border: none;
  display: inline-block;
  padding: 10px 10px;
  border-radius: 15px;
  font-family: 'paybooc-Light', sans-serif;
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;

  :hover {
    color: #1e6b7b;
    background: aliceblue;
  }
`;

export {
  Container,
  HeadContainer,
  TitleContainer,
  TableContainer,
  ReservationButton,
};
