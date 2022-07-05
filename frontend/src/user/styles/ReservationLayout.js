import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1200px;
  min-height: 100vh;
  overflow: hidden;
  margin: 0px 120px;
  padding: 0px 80px;
  font-family: 'Nanum Gothic', sans-serif;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 24px;
`;

export { MainContainer, Container };
