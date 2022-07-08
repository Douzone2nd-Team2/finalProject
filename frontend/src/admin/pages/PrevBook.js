import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { arrayIsEmpty } from '../utils/jsFunction';
import { getCookie } from '../utils/cookie';

import { Container, TitleContainer, TableContainer } from '../styles/BookInfo';

const PrevBook = ({ userNo, userName }) => {
  const [prevList, setPrevList] = useState([]);

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
      setPrevList(res.data.data.pastReservList);
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
      <TitleContainer>지난 예약 내역</TitleContainer>
      <TableContainer>
        <table className="tableHead">
          <tr>
            <th>자원</th>
            <th>예약시작일</th>
            <th>예약종료일</th>
            <th></th>
            <th></th>
          </tr>
          {!arrayIsEmpty(prevList) ? (
            prevList.map((user, idx) => (
              <tr key={idx}>
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
                    <div className="updateBtn">수정</div>
                  </Link>
                </td>
                <td>
                  <div>삭제</div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>예약 내역이 없습니다...</td>
            </tr>
          )}
        </table>
      </TableContainer>
    </Container>
  );
};

export default PrevBook;
