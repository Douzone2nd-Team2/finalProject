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
import {
  OptionInfo,
  OptionDetail,
  OptionTitle,
} from './ResourceOption/style.js';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <SamplePrevArrow className="slick-prev" />,
  nextArrow: <SampleNextArrow className="slick-next" />,
};

const ResourceInfo = (props) => {
  const [values, setValues] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    const option = props.option.split(', ');
    setValues(option);
    setContent(props.content);
  }, []);

  return (
    <ResourceInfoContainer>
      <ResourceImageTest>
        {/* 버그투성이 사진크기 조정, 정렬 다시해야됨 */}
        <Slider {...settings}>
          {props.fileList &&
            props.fileList.map((book) => (
              <img
                className="book"
                key={book.toString()}
                src={book.path}
                height="300px"
              />
            ))}
        </Slider>
      </ResourceImageTest>
      <ResourceDetatilTest>
        <OptionInfo>
          <OptionTitle>{props.title}</OptionTitle>
          <OptionDetail>{props.content}</OptionDetail>
        </OptionInfo>
        <hr></hr>
        {values &&
          values.map((value) => (
            <Option key={value} value={value} content={content}></Option>
          ))}
        {props.fuel && (
          <Option
            key={props.fuel}
            value={props.fuel}
            content={content}
          ></Option>
        )}
      </ResourceDetatilTest>
    </ResourceInfoContainer>
  );
};

export default ResourceInfo;
