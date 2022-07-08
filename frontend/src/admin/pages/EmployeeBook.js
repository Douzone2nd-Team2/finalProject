import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { getCookie } from '../utils/cookie';

import { Container, HeadContainer } from '../styles/EmployeeBook';

const EmployeeBook = () => {
  const [userInfo, setUserInfo] = useState([]);

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

  console.log(userInfo);

  return (
    <>
      <Container>
        <HeadContainer>
          예약관리 <span className="fa-solid fa-arrow-right-long" /> 사용자별
          예약관리
        </HeadContainer>
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
            userInfo.map((user, idx) => (
              <tr>
                <td>{user.no}</td>
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
                    key={idx}
                  >
                    <div>예약 확인</div>
                  </Link>
                </td>
              </tr>
            ))}
        </table>
      </Container>
    </>
  );
};

export default EmployeeBook;
