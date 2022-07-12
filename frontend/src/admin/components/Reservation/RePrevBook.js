import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Button from 'react-bootstrap/Button';

import { arrayIsEmpty } from '../../utils/jsFunction';
import { getCookie } from '../../utils/cookie';

import {
  Container,
  TitleContainer,
  TableContainer,
} from '../../styles/BookInfo';

const RePrevBook = ({ resourceNo }) => {
  const [prevList, setPrevList] = useState([]);
  const [name, setName] = useState();

  const fetchData = async () => {
    // 지난 예약내역
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_PORT}/admin/reservation/resource/bookinglist?resourceNo=${resourceNo}`,
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

  const deleteData = async (resource) => {
    const { reservNo } = resource;

    const data = {
      reservNo: reservNo,
    };

    const res = await axios
      .post(
        `${process.env.REACT_APP_SERVER_PORT}/admin/reservation/delete`,
        data,
        {
          headers: {
            Authorization: getCookie('accessToken'),
          },
        },
      )
      .then((res) => {
        console.log(res);
        const prevTemp = prevList.filter((item) => item.reservNo != reservNo);
        setPrevList(prevTemp);
      })
      .catch(console.log);
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
            <th>no.</th>
            <th>사용자</th>
            <th>예약시작일</th>
            <th>예약종료일</th>
            <th></th>
          </tr>

          {!arrayIsEmpty(prevList) ? (
            prevList.map((resource, idx) => (
              <tr key={idx}>
                <td>{prevList.length - 1}</td>
                <td>{resource.name}</td>
                <td>{resource.startTime}</td>
                <td>{resource.endTime}</td>
                <td>
                  <Link
                    to="admin/resourcebookhandle"
                    state={{
                      reservNo: resource.reservNo,
                      reservName: resource.reservName,
                      name: resource.name,
                      startTime: resource.startTime,
                      endTime: resource.endTime,
                      userNo: resource.userNo,
                    }}
                  >
                    <Button variant="primary">수정</Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        deleteData(resource);
                        fetchData();
                      }}
                    >
                      삭제
                    </Button>
                  </Link>
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

export default RePrevBook;
