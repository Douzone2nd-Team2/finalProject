import { Row, Col, Button } from 'react-bootstrap';
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import {
  Container,
  ResourceContainer,
  ResourceContainer2,
  ResourceCardUI,
} from '../styles/Resource.js';

import ResourceInput from '../components/Resource/ResourceInput.js';
import ResourceItem from '../components/Resource/ResourceItem';

const ResourcePage = () => {
  const [resources, setResources] = useState([]);
  console.log(resources);

  const [selected, setSelected] = useState('');

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const getAll = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_PORT}/resource`)
      .then((response) => {
        setResources(response.data.data);
        console.log(resources);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const getSelect = async () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_PORT}/resource/${selected}`)
      .then((response) => {
        console.log(response.data);
        setResources(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getBookmark = async () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_PORT}/resource/bookmark`)
      .then((response) => {
        setResources(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (selected == '0') {
      getAll();
    } else if (selected == '4') {
      getBookmark();
    } else {
      getSelect();
    }

    console.log(resources);
  }, [selected]);

  useEffect(() => {}, [ResourceInput, getAll]);

  return (
    <>
      <Container>
        <ResourceContainer>
          <ResourceInput getAll={getAll} />
          자원목록
        </ResourceContainer>
        <ResourceContainer2>
          <select
            onChange={handleChange}
            value={selected}
            style={{ float: 'right', marginTop: '10px' }}
          >
            <option value="0">전체</option>
            <option value="1">회의실</option>
            <option value="2">차량</option>
            <option value="3">노트북</option>
            <option value="4">북마크</option>
          </select>
          <ResourceCardUI>
            <Row style={{ width: '1000px' }}>
              {resources.map((resource, idx) => (
                <Col sm={3} key={idx} style={{ marginTop: '30px' }}>
                  <ResourceItem resource={resource} />
                </Col>
              ))}
            </Row>
          </ResourceCardUI>
        </ResourceContainer2>
      </Container>
    </>
  );
};

export default ResourcePage;
