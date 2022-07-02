import BookCarousel from '../../components/Book';
import { Container, TitleContainer } from '../../styles/Book';

const Book = () => {
  return (
    <>
      <TitleContainer>나의 예약 현황</TitleContainer>
      <Container>
        <BookCarousel />
      </Container>
    </>
  );
};

export default Book;
