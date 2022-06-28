import axios from 'axios';

import { useRecoilValue } from 'recoil';

import { tokenState } from '../../recoil/token';
import { useState, useEffect } from 'react';
import { searchState } from '../../recoil/search';

import SearchItem from '../search/SearchItem';

import Container from '../../styles/Search';

const Search = () => {
  const title = useRecoilValue(searchState);
  const token = useRecoilValue(tokenState);

  console.log('title = ', title);

  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_PORT}/main/search/resourceName?${title}`,
        {
          headers: {
            Authorization: token,
          },
        },
      );
      console.log(res.data);
      //setItems(res.data.trips);
      //console.log(items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  //console.log(books);
  return (
    <Container>
      {items &&
        items.map((book) => (
          <div key={book.id}>
            <SearchItem book={book} />
          </div>
        ))}
      <div>test</div>
    </Container>
  );
};

export default Search;
