import React from 'react';

import {
  Container,
  HeadContainer,
  TitleContainer,
  TableContainer,
} from '../../styles/AdminMain';

import Button from 'react-bootstrap/Button';

const Employee = ({ empList, loading }) => {
  return (
    <>
      {loading && <div> loading ...</div>}
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
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Employee;
