import { useState, useEffect } from 'react';
import axios from 'axios';

import { getCookie } from '../utils/cookie';

import EmployeePage from '../pages/EmployeePage';
import ResourcePage from '../components/Resource/ResourcePage';

import Reservation from '../components/reservation/Reservation';

import {
  Container,
  HeadContainer,
  TitleContainer,
  TableContainer,
} from '../styles/AdminMain';

import Button from 'react-bootstrap/Button';

const AdminMain = () => {
  const [empList, setEmpList] = useState([]);

  const data = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_PORT}/admin/userlist`,
        {
          headers: {
            // Authorization: getCookie('accessToken'),
            Authorization:
              'Bearer%eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJ1c2VyTm8iOjIsImV4cCI6MTY1Njc2NDE0MH0.E9H43GYDDc7j2Y0_6uX2d-rOFrnMayxbZCPi7XaIJ5Y',
          },
        },
      );
      console.log(res.data.data);
      setEmpList(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <Container>
      <HeadContainer>
        <TitleContainer>사원목록</TitleContainer>
        <Button variant="primary">등록</Button>
      </HeadContainer>
      <TableContainer>
        <table border="2">
          <th>No.</th>
          <th>사원번호</th>
          <th>이름</th>
          <th>부서</th>
          <th>직급</th>
          <th>전화번호</th>
          <th>이메일</th>
          <th />
          {empList.map((emp, idx) => {
            return (
              <tr key={emp.no}>
                <td>{empList.length - idx}</td>
                <td>{emp.empNo}</td>
                <td>{emp.name}</td>
                <td>{emp.deptName}</td>
                <td>{emp.gradeName}</td>
                <td>{emp.phone}</td>
                <td>{emp.email}</td>
                <td className="btnMargin">
                  <Button variant="primary">수정</Button>
                  <Button variant="danger">삭제</Button>
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <td>1</td>
            <td>2017131032</td>
            <td>엄채린</td>
            <td>ERP</td>
            <td>사원</td>
            <td>010-1234-5678</td>
            <td>chaerin@gmail.com</td>
            <td className="btnMargin">
              <Button variant="primary">수정</Button>
              <Button variant="danger">삭제</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>2018131032</td>
            <td>김희수</td>
            <td>ERP</td>
            <td>사원</td>
            <td>010-1234-5678</td>
            <td>heesoo@gmail.com</td>
            <td className="btnMargin">
              <Button variant="primary">수정</Button>
              <Button variant="danger">삭제</Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>2013131032</td>
            <td>엄태문</td>
            <td>ERP</td>
            <td>사원</td>
            <td>010-1234-5678</td>
            <td>taemoon@gmail.com</td>
            <td className="btnMargin">
              <Button variant="primary">수정</Button>
              <Button variant="danger">삭제</Button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>2015131032</td>
            <td>이정민</td>
            <td>ERP</td>
            <td>사원</td>
            <td>010-1234-5678</td>
            <td>jungmin@gmail.com</td>
            <td className="btnMargin">
              <Button variant="primary">수정</Button>
              <Button variant="danger">삭제</Button>
            </td>
          </tr> */}
        </table>
      </TableContainer>
    </Container>
  );
};

export default AdminMain;
