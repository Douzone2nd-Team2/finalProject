import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Bchart from '../../components/Barchart/BchartItem';
import Pchart from '../../components/Pchart';

const Chart = () => {
  return (
    <div>
      <Row
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '1250px',
        }}
      >
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

export default Chart;
