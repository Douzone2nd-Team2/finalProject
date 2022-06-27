import {
  ItemContainer,
  LeftContainer,
  TitleContainer,
  ImageContainer,
  RightContainer,
} from '../../styles/SearchItem';

const SearchItem = ({ book }) => {
  const { location, title, price_origin, price_discounted, thumbnail } = book;

  return (
    <ItemContainer>
      <LeftContainer>
        <TitleContainer>
          <h2 className="title">{title}</h2>
          <h3 className="location">{location}</h3>
          <span className="price_origin">{price_origin}원</span>
          <span className="p_discount">{price_discounted}원~</span>
        </TitleContainer>
        <ImageContainer>
          <img src={thumbnail} alt="thumbnail" />
        </ImageContainer>
      </LeftContainer>
      <RightContainer>
        <span>설명</span>
      </RightContainer>
    </ItemContainer>
  );
};

export default SearchItem;
