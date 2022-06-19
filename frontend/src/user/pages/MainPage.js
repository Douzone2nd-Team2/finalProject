import { useRecoilValue } from 'recoil';

import { tokenState } from '../recoil/Token';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Container from '../styles/MainPage';
import ChartPage from './ChartPage';
import CategoryPage from './CategoryPage';

const MainPage = () => {
  const token = useRecoilValue(tokenState);
  console.log(token);

  return (
    <div>
      <Header />
      <Container>
        <ChartPage />
        <CategoryPage />
      </Container>
      <Footer />
    </div>
  );
};

export default MainPage;
