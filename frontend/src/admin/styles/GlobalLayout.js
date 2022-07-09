import styled from 'styled-components';

const GlobalContainer = styled.div`
  width: 100%;
  height: 1vh;
  display: flex;
  flex-direction: column;
`;

const GlobalHeader = styled.div`
  width: 100%;
  height: fit-content;
`;

const GlobalBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export { GlobalContainer, GlobalHeader, GlobalBody, MainContainer };
