import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { searchState } from '../../recoil/search';

import SearchItem from '../search/SearchItem';

const Search = () => {
  const title = useRecoilValue(searchState);
  console.log('title = ', title);

  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        'https://8565c6b5-f051-4dfe-8d55-37738289754f.mock.pstmn.io/themes/trips',
      );
      console.log(res.data);
      setItems(res.data.trips);
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
    <>
      <div>회의실 목록</div>
      <hr />
      {/* {items &&
        items.map((book) => (
          <div key={book.id}>
            <SearchItem book={book} />
          </div>
        ))} */}
      {title}
    </>
  );
};

export default Search;
