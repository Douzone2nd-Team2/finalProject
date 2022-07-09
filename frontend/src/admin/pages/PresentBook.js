import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Button from 'react-bootstrap/Button';

import { arrayIsEmpty } from '../utils/jsFunction';
import { getCookie } from '../utils/cookie';

import { Container, TitleContainer, TableContainer } from '../styles/BookInfo';

const PresentBook = ({ userNo, userName }) => {
  const [presList, setPresList] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_PORT}/admin/reservation/user/bookinglist?userNo=${userNo}`,
        {
          headers: {
            Authorization: getCookie('accessToken'),
          },
        },
      );
      setPresList(res.data.data.presentReservList);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <TitleContainer>현재 예약 내역</TitleContainer>
      <TableContainer>
        <table>
          <tr>
            <th>no</th>
            <th>자원</th>
            <th>예약시작일</th>
            <th>예약종료일</th>
            <th></th>
            <th></th>
          </tr>
          {!arrayIsEmpty(presList) ? (
            presList.map((user, idx) => (
              <tr key={idx}>
                <td>{idx}</td>
                <td>{user.resourceName}</td>
                <td>{user.startTime}</td>
                <td>{user.endTime}</td>
                <td>
                  <Link
                    to="/admin/userbookhandle"
                    state={{
                      reservNo: user.reservNo,
                      startTime: user.startTime,
                      endTime: user.endTime,
                      userName: userName,
                    }}
                  >
                    <div>수정</div>
                  </Link>
                </td>
                <td>
                  <button>삭제</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="noData">
                예약 내역이 없습니다...
              </td>
            </tr>
          )}
        </table>
      </TableContainer>
    </Container>
  );
};

export default PresentBook;
