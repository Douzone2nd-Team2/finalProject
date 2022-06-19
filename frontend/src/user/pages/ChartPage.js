import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bchart from '../components/Bchart';
import Pchart from '../components/Pchart';

const ChartPage = () => {
  return (
    <div>
      <Row>
        <Col sm={6}>
          <Bchart />
        </Col>
        <Col sm={6}>
          <Pchart />
        </Col>
      </Row>
    </div>
  );
};

export default ChartPage;
