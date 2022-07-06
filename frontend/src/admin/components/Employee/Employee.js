import { useState, useEffect } from 'react';
import axios from 'axios';
import { getCookie } from '../../utils/cookie';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  HeadContainer,
  TitleContainer,
  TableContainer,
} from '../../styles/AdminMain';

import Button from 'react-bootstrap/Button';

const Employee = ({ empList, loading, page, items }) => {
  const navigate = useNavigate();
  // const [userNo, setUserNo] = useState(null);

  const modifyEmp = (userNo) => {
    navigate('/admin/employee', { state: userNo });
  };

  const handleRegist = () => {
    navigate('/admin/employee/regist');
  };

  return (
    <>
      {loading && <div> loading ...</div>}
      <Container>
        <HeadContainer>
          <TitleContainer>사원목록</TitleContainer>
          <Button variant="primary" onClick={handleRegist}>
            등록
          </Button>
        </HeadContainer>
        <TableContainer>
          <table border="2">
            <colgroup>
              <col width="5%" />
              <col width="20%" />
              <col width="15%" />
              <col width="10%" />
              <col width="10%" />
              <col width="15%" />
              <col width="15%" />
            </colgroup>

            <th>No.</th>
            <th>사원번호</th>
            <th>이름</th>
            <th>부서</th>
            <th>직급</th>
            <th>전화번호</th>
            <th>이메일</th>
            <th />

            {empList
              .slice(items * (page - 1), items * (page - 1) + items)
              .map((emp, idx) => {
                return (
                  <tr key={emp.no}>
                    <td>{empList.length - items * (page - 1) - idx}</td>
                    <td>{emp.empNo}</td>
                    <td>{emp.name}</td>
                    <td>{emp.deptName}</td>
                    <td>{emp.gradeName}</td>
                    <td>{emp.phone}</td>
                    <td>{emp.email}</td>
                    <td className="btnMargin">
                      <Button
                        variant="primary"
                        onClick={() => {
                          modifyEmp(emp.no);
                        }}
                      >
                        수정
                      </Button>
                      <Button variant="danger">삭제</Button>
                    </td>
                  </tr>
                );
              })}
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Employee;
