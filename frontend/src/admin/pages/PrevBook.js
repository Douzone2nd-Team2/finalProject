import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Button from 'react-bootstrap/Button';

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

  const deleteData = async (e) => {
    console.log(e.reservNo);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_PORT}/admin/reservation/delete`,
        {
          param: { reservNo: e.reservNo },
          headers: {
            Authorization: getCookie('accessToken'),
          },
        },
      );
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
            <th>no</th>
            <th>자원</th>
            <th>예약시작일</th>
            <th>예약종료일</th>
            <th></th>
            <th></th>
          </tr>
          {!arrayIsEmpty(prevList) ? (
            prevList.map((user, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
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
                    <Button variant="primary">수정</Button>
                  </Link>
                </td>
                <td>
                  <Button variant="danger" onClick={() => deleteData(user)}>
                    삭제
                  </Button>
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
