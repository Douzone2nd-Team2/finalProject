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
  margin-left: 100px;
`;

export { Container, HeadContainer, TitleContainer };
