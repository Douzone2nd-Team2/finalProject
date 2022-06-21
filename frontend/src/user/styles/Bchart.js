import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-top: 30px;
`;

const BarContainer = styled.div`
  width: 60%;
  display: flex;
  text-align: center;
  justify-content: center;
`;

const TitleContainer = styled.div`
  margin-top: 30px;
  padding-top: 30px;
  padding-left: 30px;
  font-size: 20px;
  font-weight: bolder;
`;

export { Container, TitleContainer, BarContainer };
