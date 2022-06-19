import ChartPage from './ChartPage';
import CategoryPage from './CategoryPage';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Container from '../styles/MainPage';

import { useRecoilState } from 'recoil';
import { tokenState } from '../recoil/Token';

const MainPage = () => {
  const [token, setToken] = useRecoilState(tokenState);
  console.log(token);
  return (
    <div>
      <Header />
      <Container>
        <ChartPage />
        <br />
        <CategoryPage />
      </Container>
      <br />
      <Footer />
    </div>
  );
};

export default MainPage;
