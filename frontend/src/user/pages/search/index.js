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
      setItems(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const setData = () => {
    if (items) {
      items.map((item) =>
        item.cateNo === 1
          ? setMeeting([...meeting, item])
          : item.cateNo === 2
          ? setCar([...car, item])
          : setEquip([...equip, item]),
      );
    }
  };

  useEffect(() => {
    fetchData().then(setData);
    // console.log(meeting);
    // console.log(car);
    // console.log(equip);
  }, [title]);

  return (
    <Container>
      {items &&
        items.map((book, idx) => (
          <div key={idx}>
            <SearchItem book={book} />
          </div>
        ))}
    </Container>
  );
};

export default Search;
