import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import {
  ItemContainer,
  LeftContainer,
  TitleContainer,
  ImageContainer,
  RightContainer,
} from '../../styles/SearchItem';

const SearchItem = ({ book }) => {
  const { resourceName, cateName, people, thumbnail } = book;
  // console.log('book : ', book.cateName);

  const navigate = useNavigate();

  const onClickbtn = (e) => {
    e.preventDefault();
    navigate('/reserve', {
      state: book,
    });
  };

  return (
    <ItemContainer>
      <LeftContainer>
        <TitleContainer>
          <h2 className="title">{resourceName}</h2>
          <h3 className="location">[{cateName}]</h3>
          <span className="price_origin">인원 : {people}</span>
        </TitleContainer>
        <ImageContainer>
          <img src={thumbnail} alt="thumbnail" />
        </ImageContainer>
      </LeftContainer>
      <RightContainer>
        <Button variant="primary" onClick={onClickbtn}>
          예약
        </Button>
      </RightContainer>
    </ItemContainer>
  );
};

export default SearchItem;
