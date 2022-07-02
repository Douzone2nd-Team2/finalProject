import { useState, useEffect } from 'react';
import axios from 'axios';

import { getCookie } from '../../utils/cookie';

import {
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
    <>
      <TitleContainer>오늘의 인기 자원</TitleContainer>
      <Container>
        {popular && (
          <>
            <ImageContainer
              src={popular.recommendCar?.imageUrl}
              alt="room"
              className="room"
            />
            <ImageContainer
              src={popular.recommendConference?.imageUrl}
              alt="car"
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
    </>
  );
};
export default Category;
