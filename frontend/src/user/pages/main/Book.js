import BookCarousel from '../../components/BookCarousel';
import { Container, TitleContainer } from '../../styles/BookPage';

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
