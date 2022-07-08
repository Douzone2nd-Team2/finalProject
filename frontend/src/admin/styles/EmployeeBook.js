import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  margin: auto;
  font-family: 'NanumGothic';

  table {
    width: 80%;
    margin-top: 30px;
    margin-left: 10%;
    margin-right: 15%;
    th {
      background-color: lightgray;
      width: 200px;
      text-align: center;
    }

    td {
      border-bottom: 1px solid black;
      text-align: center;
    }
  }
`;

const HeadContainer = styled.div`
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
