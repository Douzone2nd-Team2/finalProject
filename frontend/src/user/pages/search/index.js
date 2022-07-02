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
        `${process.env.REACT_APP_SERVER_PORT}/main/search?keyword=${title}`,
        {
          headers: {
            Authorization: getCookie('accessToken'),
          },
        },
      );
      console.log(res.data);
      setItems(res.data.data);
      //console.log(items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [title]);

  //console.log(items);

  return (
    <Container>
      {items &&
        items.map((book, idx) => (
          <div key={idx}>
            <SearchItem book={book} />
          </div>
        ))}
    </Container>
    // <div>test</div>
  );
};

export default Search;
