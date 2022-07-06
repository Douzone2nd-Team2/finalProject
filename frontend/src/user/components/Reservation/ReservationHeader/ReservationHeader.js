import { Header, HeaderTop, HeaderBottom, Title } from './style.js';
import Bookmark from '../Bookmark/Bookmark.js';

const ReservationHeader = () => {
  return (
    <Header>
      <HeaderTop>
        <Title>자원 이름</Title>
      </HeaderTop>
      <HeaderBottom>
        <Bookmark></Bookmark>
      </HeaderBottom>
    </Header>
  );
};

export default ReservationHeader;
