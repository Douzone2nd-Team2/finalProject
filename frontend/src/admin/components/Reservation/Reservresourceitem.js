import {
  ItemContainer,
  LeftContainer,
  TitleContainer,
  ImageContainer,
  RightContainer,
} from '../../styles/ResourceBook';

const Reservresourceitem = ({ resource }) => {
  const {
    resourceName,
    content,
    people,
    path,
    location,
    fuel,
    option,
    availableTime,
    cateNo,
  } = resource;

  return (
    <ItemContainer>
      <LeftContainer>
        <TitleContainer>
          <p className="title">{resourceName}</p>
          <p className="location">{location}</p>
          <span className="price_origin">인원 : {people}</span>
          <span className="price_origin">옵션 : {option}</span>
          <p className="price_origin">이용가능한 시간 : {availableTime}</p>
        </TitleContainer>
        <ImageContainer>
          <img src={path} alt="resourceimg" />
        </ImageContainer>
      </LeftContainer>
      <RightContainer>
        <span>{content}</span>
      </RightContainer>
    </ItemContainer>
  );
};

export default Reservresourceitem;
