import { useEffect, useState } from 'react';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ResourceItem from './ResourceItem';

import { Container, ResourceSelect } from '../../styles/ResourceStyle';

const ResourceCard = () => {
  const [resources, setResources] = useState([]);

  const getTest = async () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_PORT}/resource`)
      .then((response) => {
        console.log('연결성공');
        console.log(response);
        setResources(response.data.data);
        // console.log(resources);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getTest();
    console.log(resources);
  }, []);

  return (
    <Container>
      <Row>
        {resources.map((resource, idx) => (
          <Col sm={3} key={idx}>
            <ResourceSelect>
              <ResourceItem resource={resource} />
            </ResourceSelect>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ResourceCard;
