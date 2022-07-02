import { useEffect, useState } from 'react';
import axios from 'axios';

import { Row, Col } from 'react-bootstrap';

import ResourceItem from './ResourceItem';

import { ResourceCardUI, Container } from '../../styles/Resource';

const ResourceCard = ({ selected }) => {
  const [resources, setResources] = useState([]);
  console.log(selected);

  const getTest = async () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_PORT}/resource/${selected}`)
      .then((response) => {
        console.log('연결성공');
        console.log(response);
        setResources(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getTest();
    console.log(resources);
  }, [selected]);

  return (
    <Container>
      <ResourceCardUI>
        <Row style={{ width: '1000px' }}>
          {resources.map((resource, idx) => (
            <Col sm={3} key={idx} style={{ marginTop: '30px' }}>
              <ResourceItem resource={resource} />
            </Col>
          ))}
        </Row>
      </ResourceCardUI>
    </Container>
  );
};

export default ResourceCard;
