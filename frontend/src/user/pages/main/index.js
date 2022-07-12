import Sidebar from '../../outlets/Sidebar';
import Chart from './Chart';
import Category from './Category';

import { MainContainer, Container } from '../../styles/Main';

const Main = () => {
  return (
    <>
      <MainContainer>
        <Sidebar />
        <Container>
          <Category />
          <Chart />
        </Container>
      </MainContainer>
    </>
  );
};

export default Main;
