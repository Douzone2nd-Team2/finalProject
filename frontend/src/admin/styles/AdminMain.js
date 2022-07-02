import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 4px solid black;
  padding-top: 10px;
  Button {
    margin-top: 55px;
    height: 50px;
  }
`;

const TitleContainer = styled.div`
  margin-top: 67px;
  font-size: 30px;
  font-weight: 600;
  margin-left: 80px;
`;

const TableContainer = styled.div`
  margin-left: 120px;
  margin-top: 30px;
  table {
    width: 90%;
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

export { Container, HeadContainer, TitleContainer, TableContainer };
