import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import axios from 'axios';

import { searchState } from '../../recoil/search';
import { getCookie } from '../../utils/cookie';
import { arrayIsEmpty } from '../../utils/jsFunction';

import SearchItem from '../search/SearchItem';
import {
  Container,
  TitleContainer,
  NotContentContainer,
} from '../../styles/Search';

const Search = () => {
  const title = useRecoilValue(searchState);

  const [meeting, setMeeting] = useState([]);
  const [car, setCar] = useState([]);
  const [equip, setEquip] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_PORT}/main/search?keyword=${title}`,
        {
          headers: {
            Authorization: getCookie('accessToken'),
          },
        },
      );
      console.log(res.data.data);
      setMeeting(res.data.data.searchConferenceList);
      setCar(res.data.data.searchCarList);
      setEquip(res.data.data.searchNotebookList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [title]);

  return (
    <>
      <TitleContainer>회의실</TitleContainer>
      <Container>
        {arrayIsEmpty(meeting) === true ? (
          <NotContentContainer>검색 결과가 없습니다...</NotContentContainer>
        ) : (
          meeting.map((book, idx) => (
            <div key={idx}>
              <SearchItem book={book} />
            </div>
          ))
        )}
      </Container>
      <TitleContainer>차량</TitleContainer>
      <Container>
        {arrayIsEmpty(car) === true ? (
          <NotContentContainer>검색 결과가 없습니다...</NotContentContainer>
        ) : (
          car.map((book, idx) => (
            <div key={idx}>
              <SearchItem book={book} />
            </div>
          ))
        )}
      </Container>
      <TitleContainer>노트북</TitleContainer>
      <Container>
        {arrayIsEmpty(equip) === true ? (
          <NotContentContainer>검색 결과가 없습니다...</NotContentContainer>
        ) : (
          equip.map((book, idx) => (
            <div key={idx}>
              <SearchItem book={book} />
            </div>
          ))
        )}
      </Container>
    </>
  );
};

export default Search;
