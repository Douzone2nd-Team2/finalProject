import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 1200px;
  min-height: 100vh;
  overflow: hidden;
  padding: 0px 200px;
  font-family: 'Nanum Gothic', sans-serif;
  color: #434343;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 24px;
  color: #434343;
`;

export { MainContainer, Container };
