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

const BookContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { Container, HeadContainer, BookContainer };
