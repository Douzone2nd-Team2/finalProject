import { React, useState, useEffect } from 'react';
import Slider from 'react-slick';

import SamplePrevArrow from '../../Book/SamplePrevArrow.js';
import SampleNextArrow from '../../Book/SampleNextArrow.js';

import AA from '../../../assets/1.png';
import BB from '../../../assets/2.png';

import {
  ResourceInfoContainer,
  ResourceImageTest,
  ResourceDetatilTest,
} from './style.js';

import Option from './ResourceOption/Option.js';
import { BookmarkDiv } from '../Bookmark/style.js';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <SamplePrevArrow className="slick-prev" />,
  nextArrow: <SampleNextArrow className="slick-next" />,
};

const ResourceInfo = () => {
  const [books, setBooks] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    setBooks([AA, BB]);
    setValues(['빔프로젝터', '네비게이션', '마이크']);
  }, []);

  return (
    <ResourceInfoContainer>
      <ResourceImageTest>
        {/* 버그투성이 사진크기 조정, 정렬 다시해야됨 */}
        <Slider {...settings}>
          {books &&
            books.map((book) => (
              <img key={book.toString()} src={book} height="300px" />
            ))}
        </Slider>
      </ResourceImageTest>
      <ResourceDetatilTest>
        {values &&
          values.map((value) => <Option key={value} value={value}></Option>)}
      </ResourceDetatilTest>
    </ResourceInfoContainer>
  );
};

export default ResourceInfo;
