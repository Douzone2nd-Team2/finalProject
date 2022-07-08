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
  padding: 8px 24px;

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

export {
  FlexContainer,
  Container,
  HeadContainer,
  TitleContainer,
  TableContainer,
};
