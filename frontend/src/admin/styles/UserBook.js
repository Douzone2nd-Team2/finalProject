import styled from 'styled-components';

const Container = styled.div`
  width: 85%;
  margin: auto;
`;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 4px solid black;
  padding-top: 40px;
  margin-left: 120px;
  margin-top: 10px;
  font-size: 70px;
`;

const BookContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
`;

export { Container, HeadContainer, BookContainer };
