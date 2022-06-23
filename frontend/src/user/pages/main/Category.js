import {
  Container,
  ImageContainer,
  TitleContainer,
} from '../../styles/Category';

import room from '../../assets/room.jpeg';
import car from '../../assets/car.jpeg';
import usb from '../../assets/usb.png';

const Category = () => {
  return (
    <>
      <TitleContainer>각 카테고리별 추천 비품</TitleContainer>
      <Container>
        <ImageContainer src={room} alt="room" className="room" />
        <ImageContainer src={car} alt="car" className="car" />
        <ImageContainer src={usb} alt="usb" className="usb" />
      </Container>
    </>
  );
};

export default Category;
