import { useState, useEffect } from 'react';
import axios from 'axios';

import { getCookie } from '../utils/cookie';
import Pagination from 'react-js-pagination';

import Employee from '../components/Employee/Employee';
// import Pagination from '../components/Pagination';

// import EmployeePage from '../pages/EmployeePage';
import ResourcePage from '../pages/ResourcePage';

import Reservation from '../components/Reservation/Reservation';

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

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const currentPosts = empList.slice(indexOfFirstPost, indexOfLastPost);

  const pageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_PORT}/admin/userlist`,
        {
          headers: {
            Authorization: getCookie('accessToken'),
            //   Authorization:
            //     'Bearer%eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJ1c2VyTm8iOjIsImV4cCI6MTY1Njc2NDE0MH0.E9H43GYDDc7j2Y0_6uX2d-rOFrnMayxbZCPi7XaIJ5Y',
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
      <Employee empList={currentPosts} loading={loading}></Employee>
      {/* <Pagination
        postsPerPage={postPerPage}
        totalPosts={empList.length}
        paginate={setCurrentPage}
      ></Pagination> */}
      <Pagination
        onChangepage={pageHandler}
        postPerPage={postPerPage}
        totalPosts={empList.length}
      />
    </>
  );
};

export default AdminMain;
