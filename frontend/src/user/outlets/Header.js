import { useState, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useSetRecoilState } from 'recoil';

import { Link, useNavigate } from 'react-router-dom';

import { searchState } from '../recoil/search';

import {
  HeaderContainer,
  LogoContainer,
  SearchContainer,
  BookList,
  MyPageList,
  MyPageListContainer,
  BookListContainer,
  DropDownContainer,
  MenuContainer,
  HeaderRightContainer,
  ButtonContainer,
  VerticalLine,
} from '../styles/Header';

const Header = () => {
  const setSearchState = useSetRecoilState(searchState);

  const [isOpenBook, setIsOpenBook] = useState(false);
  const [isOpenMypage, setIsOpenMypage] = useState(false);
  const [searchTitle, setSearchTitle] = useState('');

  const bookRef = useRef(null);
  const myPageRef = useRef(null);

  const [_, removeCookie] = useCookies(['accessToken']);

  const navigate = useNavigate();

  const InitSearchTitle = () => {
    setSearchTitle('');
  };

  const deleteCookie = () => {
    removeCookie('accessToken');
    navigate('/');
  };

  const openBookmenu = () => {
    setIsOpenBook((prev) => !prev);
    setIsOpenMypage(false);
  };

  const openMypagemenu = () => {
    setIsOpenMypage((prev) => !prev);
    setIsOpenBook(false);
  };

  const searchEvent = (e) => {
    e.preventDefault();
    InitSearchTitle();
    setSearchState(searchTitle);
    navigate('/search');
  };

  const changeTitle = (e) => {
    setSearchTitle(e.target.value);
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
    <HeaderContainer>
      <LogoContainer>
        <Link to="/main" style={{ textDecoration: 'none', color: 'white' }}>
          42DA
        </Link>
      </LogoContainer>
      <SearchContainer onSubmit={searchEvent}>
        <input
          className="searchBox"
          type="text"
          placeholder="검색할 자원명을 입력하세요... "
          onChange={changeTitle}
          value={searchTitle}
        />

        <button type="submit" className="fa-solid fa-magnifying-glass" />
      </SearchContainer>

      <HeaderRightContainer>
        <MenuContainer>
          <DropDownContainer onClick={openBookmenu}>
            <div style={{ display: 'flex' }}>
              예약
              <VerticalLine />
            </div>

            {isOpenBook && (
              <BookListContainer theme={{ borderColor: 'black' }} ref={bookRef}>
                <BookList>
                  <li>회의실</li>
                  <hr />
                  <li>차량</li>
                  <hr />
                  <li>비품</li>
                </BookList>
              </BookListContainer>
            )}
          </DropDownContainer>
          <DropDownContainer onClick={openMypagemenu}>
            <div style={{ display: 'flex' }}>
              마이페이지
              <VerticalLine />
            </div>
            {isOpenMypage && (
              <MyPageListContainer ref={myPageRef}>
                <MyPageList>
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
                </MyPageList>
              </MyPageListContainer>
            )}
          </DropDownContainer>
          <ButtonContainer>
            <button className="secondary" onClick={deleteCookie}>
              로그아웃
            </button>
          </ButtonContainer>
        </MenuContainer>
      </HeaderRightContainer>
    </HeaderContainer>
  );
};

export default Header;
