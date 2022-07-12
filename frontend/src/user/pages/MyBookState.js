import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

import { getCookie } from '../../utils/cookie';

import SamplePrevArrow from './SamplePrevArrow';
import SampleNextArrow from './SampleNextArrow';
import BookItem from '../BookItem';

import './test.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: <SamplePrevArrow className="slick-prev" />,
  nextArrow: <SampleNextArrow className="slick-next" />,
};

const MyBookState = () => {
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_PORT}/main/book`,
        {
          headers: {
            Authorization: getCookie('accessToken'),
          },
        },
      );
      console.log(res);
      setBooks(res.data.data.reservationList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ margin: '0 96px' }}>
      <Slider {...settings}>
        {books &&
          books.map((book, id) => (
            <div key={id}>
              <BookItem book={book} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default MyBookState;
