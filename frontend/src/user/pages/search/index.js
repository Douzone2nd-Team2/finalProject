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

import Pagination from 'react-js-pagination';
import { PaginationBox } from '../../../admin/styles/Pagination';

const Search = () => {
  const title = useRecoilValue(searchState);

  const [meeting, setMeeting] = useState([]);
  const [car, setCar] = useState([]);
  const [equip, setEquip] = useState([]);

  const [page, setPage] = useState(1);
  const [items, setItems] = useState(3);

  const pageHandler = (pageNumber) => {
    setPage(pageNumber);
  };

  const [page2, setPage2] = useState(1);
  const [items2, setItems2] = useState(3);

  const pageHandler2 = (pageNumber) => {
    setPage2(pageNumber);
  };

  const [page3, setPage3] = useState(1);
  const [items3, setItems3] = useState(3);

  const pageHandler3 = (pageNumber) => {
    setPage3(pageNumber);
  };

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
          meeting
            .slice(items * (page - 1), items * (page - 1) + items)
            .map((book, idx) => (
              <div key={idx}>
                <SearchItem book={book} />
              </div>
            ))
        )}
        {arrayIsEmpty(meeting) === false && (
          <PaginationBox>
            <Pagination
              activePage={page}
              itemsCountPerPage={items}
              totalItemsCount={meeting.length}
              pageRangeDisplayed={5}
              onChange={pageHandler}
            ></Pagination>
          </PaginationBox>
        )}
      </Container>
      <TitleContainer>차량</TitleContainer>
      <Container>
        {arrayIsEmpty(car) === true ? (
          <NotContentContainer>검색 결과가 없습니다...</NotContentContainer>
        ) : (
          car
            .slice(items2 * (page2 - 1), items2 * (page2 - 1) + items2)
            .map((book, idx) => (
              <div key={idx}>
                <SearchItem book={book} />
              </div>
            ))
        )}
        {arrayIsEmpty(car) === false && (
          <PaginationBox>
            <Pagination
              activePage={page2}
              itemsCountPerPage={items2}
              totalItemsCount={car.length}
              pageRangeDisplayed={5}
              onChange={pageHandler2}
            ></Pagination>
          </PaginationBox>
        )}
      </Container>
      <TitleContainer>노트북</TitleContainer>
      <Container>
        {arrayIsEmpty(equip) === true ? (
          <NotContentContainer>검색 결과가 없습니다...</NotContentContainer>
        ) : (
          equip
            .slice(items3 * (page3 - 1), items3 * (page3 - 1) + items3)
            .map((book, idx) => (
              <div key={idx}>
                <SearchItem book={book} />
              </div>
            ))
        )}
        {arrayIsEmpty(equip) === false && (
          <PaginationBox>
            <Pagination
              activePage={page3}
              itemsCountPerPage={items3}
              totalItemsCount={equip.length}
              pageRangeDisplayed={5}
              onChange={pageHandler3}
            ></Pagination>
          </PaginationBox>
        )}
      </Container>
    </>
  );
};

export default Search;
