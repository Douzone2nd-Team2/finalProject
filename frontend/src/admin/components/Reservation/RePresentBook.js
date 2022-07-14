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
  ButtonContainer,
  StyledButton,
  StyledButton2,
} from '../../styles/BookInfo';

const RePresentBook = ({ resourceNo }) => {
  // 현재 예약내역
  console.log(resourceNo);
  const [presList, setPresList] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_PORT}/admin/reservation/resource/bookinglist?resourceNo=${resourceNo}`,
        {
          headers: {
            Authorization: getCookie('accessToken'),
          },
        },
      );
      setPresList(res.data.data.presentReservList);
      console.log(res.data.data.presentReservList);
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
        const presTemp = presList.filter((item) => item.reservNo != reservNo);
        setPresList(presTemp);
      })
      .catch(console.log);
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
            <th>no.</th>
            <th>사용자</th>
            <th>예약시작일</th>
            <th>예약종료일</th>
            <th></th>
            {/* <th></th> */}
          </tr>
          {!arrayIsEmpty(presList) ? (
            presList.map((resource, idx) => (
              <tr key={idx}>
                <td>{presList.length - idx}</td>
                <td>{resource.name}</td>
                <td>{resource.startTime}</td>
                <td>{resource.endTime}</td>
                <td>
                  <ButtonContainer>
                    <Link
                      to="/admin/resourcebookhandle"
                      state={{
                        cateNo: resource.cateNo,
                        reservNo: resource.reservNo,
                        userName: resource.name,
                        reservName: resource.reservName,
                        resourceName: resource.resourceName,
                        startTime: resource.startTime,
                        endTime: resource.endTime,
                        content: resource.content,
                        category: resource.category,
                        resourceNo: resource.resourceNo,
                        userNo: resource.userNo,
                      }}
                    >
                      <StyledButton variant="primary">수정</StyledButton>
                    </Link>
                    {/* </td>
                <td> */}
                    <StyledButton2
                      variant="danger"
                      onClick={() => {
                        deleteData(resource);
                        fetchData();
                      }}
                    >
                      삭제
                    </StyledButton2>
                  </ButtonContainer>
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

export default RePresentBook;
