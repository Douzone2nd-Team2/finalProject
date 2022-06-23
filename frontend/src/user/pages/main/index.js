import { useRecoilValue } from 'recoil';

import { tokenState } from '../../recoil/Token';

import Container from '../../styles/Main';
import Chart from './Chart';
import Category from './Category';
import Book from './Book';

const Main = () => {
  const token = useRecoilValue(tokenState);
  console.log(token);

  return (
    <div style={{ backgroundColor: '#fafafa' }}>
      <Container>
        <Chart />
        <Category />
        <Book />
      </Container>
    </div>
  );
};

export default Main;
