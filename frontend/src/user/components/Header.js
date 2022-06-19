import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import {
  HeaderContainer,
  SearchContainer,
  Li,
  Ul1,
  Ul2,
  ListContainer,
  DropDown,
} from '../styles/Header';

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
        <Li>
          <DropDown>
            <div>
              예약
              <ListContainer theme={{ borderColor: 'red' }}>
                <Ul1>
                  <Li>회의실</Li>
                  <hr />
                  <Li>차량</Li>
                  <hr />
                  <Li>비품</Li>
                </Ul1>
              </ListContainer>
            </div>
          </DropDown>
        </Li>
        <div>공지사항</div>
        <SearchContainer>
          <input
            className="searchBox"
            type="text"
            placeholder="검색할 상품명을 입력하세요... "
            // value, onChange
          />
          <span className="fa-solid fa-magnifying-glass" />
        </SearchContainer>
        <Li>
          <DropDown>
            <div>마이페이지</div>
            <ListContainer>
              <Ul2>
                <Li>개인정보 조회</Li>
                <hr />
                <Li>즐겨찾기</Li>
                <hr />
                <Li>비밀번호 변경</Li>
                <hr />
                <Li>예약현황</Li>
              </Ul2>
            </ListContainer>
          </DropDown>
        </Li>
        <Button variant="secondary">로그아웃</Button>
      </HeaderContainer>
    </div>
  );
};

export default Header;
