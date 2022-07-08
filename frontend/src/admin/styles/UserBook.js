import styled from 'styled-components';

const Container = styled.div`
  width: 85%;
  margin: auto;
  font-family: 'NanumGothic';
`;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 4px solid black;
  padding-top: 40px;
  margin-left: 120px;
  margin-top: 10px;
  font-size: 50px;
`;

const BookContainer = styled.div`
  display: flex;
  justify-content: first baseline;
`;

export { Container, HeadContainer, BookContainer };
