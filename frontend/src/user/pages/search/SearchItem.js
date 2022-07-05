import {
  ItemContainer,
  LeftContainer,
  TitleContainer,
  ImageContainer,
  RightContainer,
} from '../../styles/SearchItem';

const SearchItem = ({ book }) => {
  const { resourceName, cateName, people, thumbnail } = book;
  console.log('book : ', book.cateName);

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
        <span>설명</span>
      </RightContainer>
    </ItemContainer>
  );
};

export default SearchItem;
