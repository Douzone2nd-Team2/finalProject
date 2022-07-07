import styled from 'styled-components';

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
  margin-left: 140px;

  Button {
    float: right;
  }
`;

const TableContainer = styled.div`
  margin-left: 140px;
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

export { Container, HeadContainer, TableContainer };
