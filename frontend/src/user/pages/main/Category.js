import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { getCookie } from '../../utils/cookie';

import {
  AllContainer,
  Container,
  ImageContainer,
  TitleContainer,
  ResourceContainer,
  ResourceName,
} from '../../styles/Category';

const Category = () => {
  const [popular, setPopular] = useState([]);
  const [conference, setConference] = useState();
  const [car, setCar] = useState();
  const [notebook, setNotebook] = useState();

  const [carimg, setCarimg] = useState('');

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_PORT}/main/recommend`,
        {
          headers: {
            Authorization: getCookie('accessToken'),
          },
        },
      );
      setPopular(res.data.data);
      setConference(res.data.data.recommendConference);
      setCar(res.data.data.recommendCar);
      setNotebook(res.data.data.recommendNotebook);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AllContainer>
      <TitleContainer>오늘의 인기 자원</TitleContainer>
      <Container>
        {popular && (
          <>
            <ResourceContainer>
              <ResourceName>{popular.recommendCar?.resourceName}</ResourceName>
              <Link
                to="/reserve"
                state={car}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <ImageContainer
                  src={popular.recommendCar?.imageUrl}
                  alt="No Image"
                  className="room"
                />
              </Link>
            </ResourceContainer>
            <ResourceContainer>
              <ResourceName>
                {popular.recommendConference?.resourceName}
              </ResourceName>
              <Link
                to="/reserve"
                state={conference}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  cursor: 'pointer',
                }}
              >
                <ImageContainer
                  src={popular.recommendConference?.imageUrl}
                  alt="No Image"
                  className="car"
                />
              </Link>
            </ResourceContainer>
            <ResourceContainer>
              <ResourceName>
                {popular.recommendNotebook?.resourceName}
              </ResourceName>
              <Link
                to="/reserve"
                state={notebook}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  cursor: 'pointer',
                }}
              >
                <ImageContainer
                  src={popular.recommendNotebook?.imageUrl}
                  alt="No Image"
                  className="car"
                />
              </Link>
            </ResourceContainer>
          </>
        )}
      </Container>
    </AllContainer>
  );
};
export default Category;
