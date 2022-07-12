import { useState, useEffect } from 'react';
import axios from 'axios';
import { getCookie } from '../utils/cookie';
import Pagination from 'react-js-pagination';

import { PaginationBox } from '../styles/Pagination';

import Employee from '../components/Employee/Employee';

import {
  FlexContainer,
  Container,
  HeadContainer,
  TitleContainer,
  TableContainer,
} from '../styles/AdminMain';

import Button from 'react-bootstrap/Button';

const AdminMain = () => {
  const [empList, setEmpList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [items, setItems] = useState(15);

  const pageHandler = (pageNumber) => {
    setPage(pageNumber);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_PORT}/admin/userlist`,
        {
          headers: {
            Authorization: getCookie('accessToken'),
          },
        },
      );
      setEmpList(res.data.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Employee
      empList={empList}
      callback={setEmpList}
      loading={loading}
      page={page}
      items={items}
      activePage={page}
      itemsCountPerPage={items}
      totalItemsCount={empList.length}
      pageRangeDisplayed={5}
      onPageChange={pageHandler}
    ></Employee>
  );
};

export default AdminMain;
