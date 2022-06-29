import Sidebar from '../../outlets/Sidebar';
import Chart from './Chart';
import Category from './Category';
import Book from './Book';

import { MainContainer, Container } from '../../styles/Main';

const Main = () => {
  return (
    <>
      <MainContainer>
        <Sidebar />
        <Container>
          <Chart />
          <Category />
          <Book />
        </Container>
      </MainContainer>
    </>
  );
};

export default Main;
