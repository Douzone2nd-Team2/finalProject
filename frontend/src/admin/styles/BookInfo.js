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
`;

// const UpdateContainer = styled.div`
//   .updateBtn {
//     background-color: blue;
//     width: 30px;
//   }
// `;

export { Container, TitleContainer, TableContainer };
