import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import axios from 'axios';

import { searchState } from '../../recoil/search';
import { getCookie } from '../../utils/cookie';

import SearchItem from '../search/SearchItem';
import Container from '../../styles/Search';

const Search = () => {
  const title = useRecoilValue(searchState);

  console.log('title = ', title);

  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_PORT}/main/search/resourceName?${title}`,
        {
          headers: {
            Authorization: getCookie('accessToken'),
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
