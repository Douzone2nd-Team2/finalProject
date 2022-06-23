import { useRecoilValue } from 'recoil';

import { tokenState } from '../../recoil/Token';

import Sidebar from '../../outlets/Sidebar';
import Container from '../../styles/Main';
import Chart from './Chart';
import Category from './Category';
import Book from './Book';

const Main = () => {
  const token = useRecoilValue(tokenState);
  console.log(token);

  return (
    <>
      <Sidebar />
      <div style={{ backgroundColor: '#fafafa' }}>
        <Container>
          <Chart />
          <Category />
          <Book />
        </Container>
      </div>
    </>
  );
};

export default Main;
