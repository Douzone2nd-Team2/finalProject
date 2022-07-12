import { useState, useEffect } from 'react';
import axios from 'axios';

import { getCookie } from '../../utils/cookie';

import {
  AllContainer,
  Container,
  ImageContainer,
  TitleContainer,
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
            <ImageContainer
              src={popular.recommendCar?.imageUrl}
              alt="No Image"
              className="room"
            />
            <ImageContainer
              src={popular.recommendConference?.imageUrl}
              alt="No Image"
              className="car"
            />
            <ImageContainer
              src={popular.recommendConference?.imageUrl}
              alt="No Image"
              className="car"
            />
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
