import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

import SamplePrevArrow from './SamplePrevArrow';
import SampleNextArrow from './SampleNextArrow';
import BookItem from '../BookItem';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  prevArrow: <SamplePrevArrow />,
  nextArrow: <SampleNextArrow />,
};

const BookCarousel = () => {
  const [books, setBooks] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(
        'https://8565c6b5-f051-4dfe-8d55-37738289754f.mock.pstmn.io/themes/trips',
      );
      setBooks(res.data.trips);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(books);
  return (
    <div style={{ margin: '0 96px' }}>
      <Slider {...settings}>
        {books &&
          books.map((book) => (
            <div key={book.id}>
              <BookItem book={book} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default BookCarousel;
