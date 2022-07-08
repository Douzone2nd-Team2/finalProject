import { Row, Col, Button } from 'react-bootstrap';
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { getCookie } from '../utils/cookie';
import {
  Container,
  ResourceContainer,
  ResourceContainer2,
  ResourceCardUI,
  ResourcePagenation,
  SelectBoxDiv,
} from '../styles/Resource.js';

import Pagination from 'react-js-pagination';

import { PaginationBox } from '../styles/Pagination';
import ResourceInput from '../components/Resource/ResourceInput.js';
import ResourceItem from '../components/Resource/ResourceItem';
import { height } from '@mui/system';

const ResourcePage = () => {
  const [resources, setResources] = useState([]);
  const [resourceNum, setResourceNum] = useState();

  const num = resources[resources.length - 1]?.resourceNo;
  console.log(num);

  // console.log(resources[resources.length - 1].resourceNo);

  // console.log(resources);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(12);

  const [selected, setSelected] = useState('');

  const pageHandler = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const getResourceNo = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_PORT}/resource`,
        {
          headers: {
            Authorization: getCookie('accessToken'),
          },
        },
      );
      setResourceNum(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getAll = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_PORT}/resource`, {
        headers: {
          Authorization: getCookie('accessToken'),
        },
      })
      .then((response) => {
        setResources(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const getSelect = async () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_PORT}/resource/${selected}`, {
        headers: {
          Authorization: getCookie('accessToken'),
        },
      })
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
      .get(`${process.env.REACT_APP_SERVER_PORT}/resource/bookmark`, {
        headers: {
          Authorization: getCookie('accessToken'),
        },
      })
      .then((response) => {
        setResources(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getResourceNo();
  }, []);

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
          <ResourceInput getAll={getAll} num={num} />
          자원목록
        </ResourceContainer>
        <ResourceContainer2>
          <SelectBoxDiv>
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
          </SelectBoxDiv>
          <ResourceCardUI>
            <Row style={{ width: '100%' }}>
              {resources
                .slice(items * (page - 1), items * (page - 1) + items)
                .map((resource, idx) => (
                  <Col sm={3} key={idx} style={{ marginTop: '30px' }}>
                    <ResourceItem resource={resource} />
                  </Col>
                ))}
            </Row>
          </ResourceCardUI>
          <PaginationBox>
            <Pagination
              activePage={page}
              itemsCountPerPage={items}
              totalItemsCount={resources.length}
              pageRangeDisplayed={5}
              onChange={pageHandler}
            ></Pagination>
          </PaginationBox>
        </ResourceContainer2>
      </Container>
    </>
  );
};

export default ResourcePage;
