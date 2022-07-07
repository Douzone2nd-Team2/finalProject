import { useState, useEffect } from 'react';
import axios from 'axios';
import { getCookie } from '../utils/cookie';
import Pagination from 'react-js-pagination';

import { PaginationBox } from '../styles/Pagination';

import Employee from '../components/Employee/Employee';

import {
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
  const [items, setItems] = useState(5);

  const pageHandler = (pageNumber) => {
    setPage(pageNumber);
  };

  const itemChane = (e) => {
    setItems(Number(e.tart.value));
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
      console.log(res.data.data);
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
    <>
      <Employee
        empList={empList}
        loading={loading}
        page={page}
        items={items}
      ></Employee>
      <PaginationBox>
        <Pagination
          activePage={page}
          itemsCountPerPage={items}
          totalItemsCount={empList.length - 1}
          pageRangeDisplayed={5}
          onChange={pageHandler}
        ></Pagination>
      </PaginationBox>
    </>
  );
};

export default AdminMain;
