import { Link } from 'react-router-dom';
import { HeaderContainer, SearchContainer } from '../styles/Header';

const Header = () => {
  return (
    <div>
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + '/logo.png'}
          alt="Logo"
          className="logo"
        />
      </Link>
      <HeaderContainer>
        <div>예약</div>
        <div>공지사항</div>
        <SearchContainer>
          <input
            className="searchBox"
            type="text"
            placeholder="검색할 상품명을 입력하세요... "
          />
        </SearchContainer>
        <div>
          <span className="fa-solid fa-magnifying-glass" />
        </div>
        <div>마이페이지</div>
        <button>로그아웃</button>
      </HeaderContainer>
    </div>
  );
};

export default Header;
