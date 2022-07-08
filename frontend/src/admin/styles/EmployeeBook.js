import styled from 'styled-components';

const Container = styled.div`
  /* width: 80%;
  margin: auto; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  margin: auto;

  table {
    width: 80%;
    margin-top: 30px;
    //margin-left: 100px;
    margin-left: 10%;
    margin-right: 15%;
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
  padding-top: 70px;
  border-bottom: 4px solid black;
  margin-left: 100px;
`;
const TitleContainer = styled.div`
  background-color: #f6f6f6;
  margin-top: 20px;
  width: 1075px;
  box-shadow: 1px 1px #e2e2e2;
`;

export { Container, HeadContainer, TitleContainer };
