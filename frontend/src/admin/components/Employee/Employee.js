import { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { arrayIsEmpty } from '../../utils/jsFunction';
import { getCookie } from '../../utils/cookie';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  HeadContainer,
  TitleContainer,
  TableContainer,
} from '../../styles/AdminMain';

import Button from 'react-bootstrap/Button';

const Employee = ({ empList, callback, loading, page, items }) => {
  const navigate = useNavigate();

  const [employeeList, setEmployeeList] = useState([]);

  const modifyEmp = (userNo) => {
    navigate('/admin/employee', { state: userNo });
  };

  const deletePost = async (userNo) => {
    const body = { no: userNo };
    await axios
      .post(`${process.env.REACT_APP_SERVER_PORT}/admin/userdelete`, body, {
        headers: {
          Authorization: getCookie('accessToken'),
        },
      })
      .then(() => {
        alert('삭제가 완료되었습니다.');
        const empTemp = employeeList.filter((item) => item.no != userNo);
        setEmployeeList(empTemp);
        callback(empTemp);
      });
  };

  const deleteEmp = async (userNo) => {
    await deletePost(userNo);
  };

  const handleRegist = () => {
    navigate('/admin/employee/regist');
  };

  useLayoutEffect(() => {
    if (arrayIsEmpty(employeeList)) {
      setEmployeeList(empList);
    }
  });

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
              <col width="7%" />
              <col width="18%" />
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

            {employeeList
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
                      <Button
                        variant="danger"
                        onClick={() => {
                          deleteEmp(emp.no);
                        }}
                      >
                        삭제
                      </Button>
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
