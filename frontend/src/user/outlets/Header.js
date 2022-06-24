import { useState, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import {
  HeaderContainer,
  LogoContainer,
  SearchContainer,
  Ul1,
  Ul2,
  ListContainer,
  DropDown,
  Margin1,
  Margin2,
  MenuContainer,
} from '../styles/Header';

const Header = () => {
  const [isOpenBook, setIsOpenBook] = useState(false);
  const [isOpenMypage, setIsOpenMypage] = useState(false);
  const [searchTitle, setSearchTitle] = useState('');

  const bookRef = useRef(null);
  const myPageRef = useRef(null);
  const searchIcon = useRef(null);

  const [cookies, removeCookie] = useCookies(['accessToken']);

  const navigate = useNavigate();

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchIcon.current.click();
    }
  };

  const InitSearchTitle = (e) => {
    setSearchTitle('');
  };

  const deleteCookie = (e) => {
    removeCookie('accessToken');
    navigate('/');
  };

  useEffect(() => {
    const handleClickBookOutside = (e) => {
      if (
        isOpenBook &&
        (!bookRef.current || !bookRef.current.contains(e.target))
      )
        setIsOpenBook(false);
    };
    const handleClickMypageOutside = (e) => {
      if (
        isOpenMypage &&
        (!myPageRef.current || !myPageRef.current.contains(e.target))
      )
        setIsOpenMypage(false);
    };
    window.addEventListener('click', handleClickBookOutside);
    window.addEventListener('click', handleClickMypageOutside);

    return () => {
      window.removeEventListener('click', handleClickBookOutside);
      window.removeEventListener('click', handleClickMypageOutside);
    };
  }, [isOpenBook, isOpenMypage]);

  return (
    <div>
      <HeaderContainer>
        <LogoContainer>
          <Link to="/main" style={{ textDecoration: 'none', color: 'white' }}>
            42DA
          </Link>
        </LogoContainer>
        <DropDown>
          <Margin1
            onClick={() => {
              setIsOpenBook((prev) => !prev);
              setIsOpenMypage(false);
            }}
          >
            <MenuContainer>예약</MenuContainer>
          </Margin1>
          {isOpenBook && (
            <ListContainer theme={{ borderColor: 'black' }} ref={bookRef}>
              <Ul1>
                <li>회의실</li>
                <hr />
                <li>차량</li>
                <hr />
                <li>비품</li>
              </Ul1>
            </ListContainer>
          )}
        </DropDown>
        <SearchContainer>
          <input
            className="searchBox"
            type="text"
            placeholder="검색할 상품명을 입력하세요... "
            onChange={(e) => {
              setSearchTitle(e.target.value);
            }}
            value={searchTitle}
            onKeyPress={onKeyPress}
          />
          <Link
            to="/search"
            state={{
              title: searchTitle,
            }}
          >
            <span
              className="fa-solid fa-magnifying-glass"
              ref={searchIcon}
              onClick={InitSearchTitle}
            />
          </Link>
        </SearchContainer>
        <MenuContainer>공지사항</MenuContainer>

        <DropDown>
          <Margin2
            onClick={() => {
              setIsOpenMypage((prev) => !prev);
              setIsOpenBook(false);
            }}
          >
            <MenuContainer>마이페이지</MenuContainer>
          </Margin2>
          {isOpenMypage && (
            <ListContainer ref={myPageRef}>
              <Ul2>
                <li>
                  <Link to="/info">개인정보 조회</Link>
                </li>
                <hr />
                <li>즐겨찾기</li>
                <hr />
                <li>
                  <Link to="/reset">비밀번호 변경</Link>
                </li>
                <hr />
                <li>예약현황</li>
              </Ul2>
            </ListContainer>
          )}
        </DropDown>
        <Button variant="secondary" onClick={deleteCookie}>
          로그아웃
        </Button>
      </HeaderContainer>
    </div>
  );
};

export default Header;
