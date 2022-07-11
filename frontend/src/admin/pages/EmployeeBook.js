import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { getCookie } from '../utils/cookie';

import {
  Container,
  HeadContainer,
  TableContainer,
  ReservationButton,
} from '../styles/EmployeeBook';
import Pagination from 'react-js-pagination';
import { PaginationBox } from '../styles/Pagination';

const EmployeeBook = () => {
  const [userInfo, setUserInfo] = useState([]);

  const [page, setPage] = useState(1);
  const [items, setItems] = useState(15);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_PORT}/admin/reservation/user`,
        {
          headers: {
            Authorization: getCookie('accessToken'),
          },
        },
      );
      console.log(res);
      setUserInfo(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pageHandler = (pageNumber) => {
    setPage(pageNumber);
  };

  console.log(userInfo);

  return (
    <Container>
      <HeadContainer>
        예약관리 <span className="fa-solid fa-arrow-right-long" /> 사용자별
        예약관리
      </HeadContainer>
      <TableContainer>
        <table>
          <tr>
            <th>NO.</th>
            <th>사원번호</th>
            <th>사용자</th>
            <th>부서</th>
            <th>직급</th>
            <th></th>
          </tr>
          {userInfo &&
            userInfo
              .slice(items * (page - 1), items * (page - 1) + items)
              .map((user, idx) => {
                // React List Key 인덱스를 넣는거는 최후의 방식
                const key = `user-info-${idx}`;
                return (
                  <tr key={(key, idx)}>
                    <td>{userInfo.length - items * (page - 1) - idx}</td>
                    <td>{user.empNo}</td>
                    <td>{user.name}</td>
                    <td>{user.deptName}</td>
                    <td>{user.gradeName}</td>
                    <td>
                      <Link
                        to="/admin/userbook"
                        state={{
                          userNo: user.no,
                          userName: user.name,
                        }}
                        style={{ textDecoration: 'none' }}
                      >
                        <ReservationButton>예약 확인</ReservationButton>
                      </Link>
                    </td>
                  </tr>
                );
              })}
        </table>
        <PaginationBox>
          <Pagination
            activePage={page}
            itemsCountPerPage={items}
            totalItemsCount={userInfo.length}
            pageRangeDisplayed={5}
            onChange={pageHandler}
          ></Pagination>
        </PaginationBox>
      </TableContainer>
    </Container>
  );
};

export default EmployeeBook;
