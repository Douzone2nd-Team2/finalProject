import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import {
  HeaderContainer,
  SearchContainer,
  Ul1,
  Ul2,
  ListContainer,
  DropDown,
  Margin1,
  Margin2,
} from '../styles/Header';

const Header = () => {
  const [isOpenBook, setIsOpenBook] = useState(false);
  const [isOpenMypage, setIsOpenMypage] = useState(false);
  const bookRef = useRef(null);
  const myPageRef = useRef(null);

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
      <Link to="/main">
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
      </Link>
      <HeaderContainer>
        <DropDown>
          <Margin1
            onClick={() => {
              setIsOpenBook((prev) => !prev);
              setIsOpenMypage(false);
            }}
          >
            예약
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
        <DropDown>
          <Margin2
            onClick={() => {
              setIsOpenMypage((prev) => !prev);
              setIsOpenBook(false);
            }}
          >
            마이페이지
          </Margin2>
          {isOpenMypage && (
            <ListContainer ref={myPageRef}>
              <Ul2>
                <li>개인정보 조회</li>
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
        <Button variant="secondary">로그아웃</Button>
      </HeaderContainer>
    </div>
  );
};

export default Header;
