import { Container, HeadContainer, SelectBoxDiv } from '../styles/ResourceBook';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';

import { getCookie } from '../utils/cookie';

import Reservresourceitem from '../components/Reservation/Reservresourceitem';

const ResourceList = () => {
  const [selected, setSelected] = useState(1);
  const [resources, setResources] = useState([]);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const getResource = async () => {
    console.log(selected);
    const param = { cateNo: selected };
    axios
      .get(`${process.env.REACT_APP_SERVER_PORT}/admin/reservation/resource`, {
        params: param,
        headers: {
          Authorization: getCookie('accessToken'),
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setResources(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getResource();
  }, [selected]);

  return (
    <Container>
      <HeadContainer>
        예약관리 <span className="fa-solid fa-arrow-right-long" /> 자원별
        예약관리
      </HeadContainer>
      <SelectBoxDiv>
        <select
          onChange={handleChange}
          value={selected}
          style={{ float: 'right', marginTop: '10px' }}
        >
          <option value="1">회의실</option>
          <option value="2">차량</option>
          <option value="3">노트북</option>
          <option value="4">북마크</option>
        </select>
      </SelectBoxDiv>
      {resources.map((resource, idx) => (
        <Link
          to="/admin/resourcebook"
          state={{
            resourceNo: resource.resourceNo,
            resourceName: resource.resourceName,
          }}
          style={{ textDecoration: 'none', color: 'black' }}
          key={idx}
        >
          <Reservresourceitem resource={resource} />
        </Link>
      ))}
    </Container>
  );
};

export default ResourceList;
