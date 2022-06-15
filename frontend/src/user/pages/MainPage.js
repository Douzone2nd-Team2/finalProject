import Pchart from '../components/Pchart';
import Bchart from '../components/Bchart';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header';

const MainPage = () => {
  return (
    <div>
      <Header />
      <Row>
        <Col sm={6}>
          <Pchart />
          <Bchart />
        </Col>
      </Row>
      <Pchart />
      <Bchart />
    </div>
  );
};

export default MainPage;
