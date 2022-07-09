import { useState, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useSetRecoilState } from 'recoil';

import { Link, useNavigate } from 'react-router-dom';

import { searchState } from '../recoil/search';

import {
  HeaderContainer,
  LogoContainer,
  SearchContainer,
  MyPageList,
  MyPageListContainer,
  DropDownContainer,
  MenuContainer,
  HeaderRightContainer,
  ButtonContainer,
  VerticalLine,
} from '../styles/Header';

const Header = () => {
  const setSearchState = useSetRecoilState(searchState);

  const [isOpenMypage, setIsOpenMypage] = useState(false);
  const [searchTitle, setSearchTitle] = useState('');
  const emptyTitle = '';

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

  const openMypagemenu = () => {
    setIsOpenMypage((prev) => !prev);
  };

  const searchEvent = (e) => {
    e.preventDefault();
    if (searchTitle.length === 0) {
      alert('값이 입력되지 않았습니다. 다시 입력하세요!');
      return;
    }
    setSearchState(searchTitle);
    InitSearchTitle();
    navigate('/search');
  };

  const changeTitle = (e) => {
    setSearchTitle(e.target.value);
  };

  useEffect(() => {
    const handleClickMypageOutside = (e) => {
      if (
        isOpenMypage &&
        (!myPageRef.current || !myPageRef.current.contains(e.target))
      )
        setIsOpenMypage(false);
    };
    window.addEventListener('click', handleClickMypageOutside);

    return () => {
      window.removeEventListener('click', handleClickMypageOutside);
    };
  }, [isOpenMypage]);

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
          <DropDownContainer>
            <Link
              to="/search"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <div
                style={{ display: 'flex' }}
                onClick={() => {
                  setSearchState('');
                }}
              >
                예약
                <VerticalLine />
              </div>
            </Link>
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
                    <Link to="/mypage/user">개인정보 조회</Link>
                  </li>
                  <hr />
                  <li>즐겨찾기</li>
                  <hr />
                  <li>
                    <Link to="/mypage/changepw">비밀번호 변경</Link>
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
