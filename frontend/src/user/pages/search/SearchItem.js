import { useNavigate, Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import {
  ItemContainer,
  LeftContainer,
  TitleContainer,
  ImageContainer,
  RightContainer,
  ButtonContainer,
} from '../../styles/SearchItem';

const SearchItem = ({ book }) => {
  const { resourceName, cateName, people, thumbnail, option } = book;
  // console.log('book : ', book.cateName);

  const navigate = useNavigate();

  const onClickbtn = (e) => {
    e.preventDefault();
    navigate('/reserve', {
      state: book,
    });
  };

  return (
    <Link
      to="/reserve"
      state={book}
      style={{ textDecoration: 'none', color: 'black' }}
    >
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
          <div>옵션 : {option}</div>
        </RightContainer>
        <ButtonContainer>
          <Button variant="primary" onClick={onClickbtn}>
            예약
          </Button>
        </ButtonContainer>
      </ItemContainer>
    </Link>
  );
};

export default SearchItem;
