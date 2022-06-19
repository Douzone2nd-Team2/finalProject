import {
  Container,
  ImageContainer,
  TitleContainer,
} from '../styles/CategoryPage';

const CategoryPage = () => {
  return (
    <>
      <TitleContainer>각 카테고리별 추천 비품</TitleContainer>
      <Container>
        <ImageContainer
          src={process.env.PUBLIC_URL + '/room.jpeg'}
          alt="room"
          className="room"
        />
        <ImageContainer
          src={process.env.PUBLIC_URL + '/car.jpeg'}
          alt="car"
          className="car"
        />
        <ImageContainer
          src={process.env.PUBLIC_URL + '/usb.png'}
          alt="usb"
          className="usb"
        />
      </Container>
    </>
  );
};

export default CategoryPage;
