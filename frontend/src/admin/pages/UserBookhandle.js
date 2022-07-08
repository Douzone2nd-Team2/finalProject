import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { getCookie } from '../utils/cookie';

import Button from 'react-bootstrap/Button';

import {
  AllContainer,
  Container,
  HeadContainer,
  CategoryContainer,
  BookContainer,
  NameContainer,
  ContentContainer,
  ContentSort,
  MagnifyingGlass,
  ButtonContainer,
} from '../styles/UserBookhandle';

const UserBookhandle = () => {
  const location = useLocation();
  const reservNo = location.state.reservNo;

  const [book, setBook] = useState([]);
  console.log(location.state.reservNo);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_PORT}/admin/reservation/view?reservNo=${reservNo}`,
        {
          headers: {
            Authorization: getCookie('accessToken'),
          },
        },
      );
      console.log(res);
      setBook(res.data.data[0]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(book);
    // console.log(book[0].resouceName);
  }, []);

  return (
    <AllContainer>
      <Container>
        <HeadContainer>
          예약관리 <span className="fa-solid fa-arrow-right-long" /> 사용자별
          예약조회 및 수정
        </HeadContainer>
      </Container>
      <BookContainer>
        <NameContainer>
          <span>{book.resourceName}</span>
          <CategoryContainer>{book.category}</CategoryContainer>
        </NameContainer>
        <hr />
        <ContentContainer>
          <form>
            <ContentSort>
              <label htmlfor="dataSort">시작 시간</label>
              <input type="date" value="" min="yyy" max="zzz" />
            </ContentSort>
            <ContentSort>
              <label htmlFor="option">종료 시간</label>
              <input type="date" value="xxx" min="yyy" max="zzz" />
            </ContentSort>
            <ContentSort>
              <label htmlFor="user">사용자</label>
              <input type="text" id="user" />
              <MagnifyingGlass>
                <button className="fa-solid fa-magnifying-glass" />
              </MagnifyingGlass>
            </ContentSort>
            <ContentSort>
              <label htmlFor="withUser">동참자</label>
              <input type="text" id="withUser" />
              <MagnifyingGlass>
                <button className="fa-solid fa-magnifying-glass" />
              </MagnifyingGlass>
            </ContentSort>
            <ContentSort>
              <label htmlFor="resourceInfo">정보</label>
              <textarea cols="50" rows="5" id="resourceInfo" />
            </ContentSort>
            <ButtonContainer>
              <Button variant="primary">수정</Button>
            </ButtonContainer>
          </form>
        </ContentContainer>
      </BookContainer>
    </AllContainer>
  );
};

export default UserBookhandle;
