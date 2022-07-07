import { useLocation } from 'react-router-dom';

import PrevBook from './PrevBook';
import PresentBook from './PresentBook';

import { Container, HeadContainer, BookContainer } from '../styles/UserBook';

const UserBook = () => {
  const location = useLocation();
  console.log('사원 번호 : ', location.state.userNo);
  console.log('사원 이름 : ', location.state.userName);

  const userName = location.state.userName;
  const userNo = location.state.userNo;

  return (
    <Container>
      <HeadContainer>{userName}님</HeadContainer>
      <BookContainer>
        <PrevBook userNo={userNo} />
        <PresentBook userNo={userNo} />
      </BookContainer>
    </Container>
  );
};

export default UserBook;
