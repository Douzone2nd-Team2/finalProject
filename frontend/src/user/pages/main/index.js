import { useRecoilValue } from 'recoil';

import { tokenState } from '../../recoil/token';

import Sidebar from '../../outlets/Sidebar';
import { MainContainer, Container } from '../../styles/Main';
import Chart from './Chart';
import Category from './Category';
import Book from './Book';

const Main = () => {
  const token = useRecoilValue(tokenState);
  console.log('access token : ', token);

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
