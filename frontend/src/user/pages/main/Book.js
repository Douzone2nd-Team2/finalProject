import BookCarousel from '../../components/Book';
import { BookContainer, Container, TitleContainer } from '../../styles/Book';

const Book = () => {
  return (
    <BookContainer>
      <TitleContainer>나의 예약 현황</TitleContainer>
      <Container>
        <BookCarousel />
      </Container>
    </BookContainer>
  );
};

export default Book;
