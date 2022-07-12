import { useState, useEffect } from 'react';
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
      console.log(res);
      setPopular(res.data.data);
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
              <ImageContainer
                src={popular.recommendCar?.imageUrl}
                alt="No Image"
                className="room"
              />
            </ResourceContainer>
            <ResourceContainer>
              <ResourceName>
                {popular.recommendConference?.resourceName}
              </ResourceName>
              <ImageContainer
                src={popular.recommendConference?.imageUrl}
                alt="No Image"
                className="car"
              />
            </ResourceContainer>
            <ResourceContainer>
              <ResourceName>
                {popular.recommendNotebook?.resourceName}
              </ResourceName>
              <ImageContainer
                src={popular.recommendNotebook?.imageUrl}
                alt="No Image"
                className="car"
              />
            </ResourceContainer>
          </>
        )}

        {/* <ImageContainer
          src={popular.recommendCar.imageUrl}
          alt="usb"
          className="usb"
        /> */}
      </Container>
    </AllContainer>
  );
};
export default Category;
