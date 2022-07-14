import { useLocation } from 'react-router-dom';

import PrevBook from './PrevBook';
import PresentBook from './PresentBook';

import { Container, HeadContainer, BookContainer } from '../styles/UserBook';

const UserBook = () => {
  const location = useLocation();

  const userName = location.state.userName;
  const userNo = location.state.userNo;

  return (
    <Container>
      <HeadContainer>{userName}님</HeadContainer>
      <BookContainer>
        <PresentBook userNo={userNo} userName={userName} />
        <PrevBook userNo={userNo} userName={userName} />
      </BookContainer>
    </Container>
  );
};

export default UserBook;
