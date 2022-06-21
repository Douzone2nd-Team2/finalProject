import { useRecoilValue } from 'recoil';

import { tokenState } from '../../recoil/Token';

import Container from '../../styles/MainPage';
import ChartPage from './Chart';
import CategoryPage from './Category';
import BookPage from './Book';

const MainPage = () => {
  const token = useRecoilValue(tokenState);
  console.log(token);

  return (
    <div>
      <Container>
        <ChartPage />
        <CategoryPage />
        <BookPage />
      </Container>
    </div>
  );
};

export default MainPage;
