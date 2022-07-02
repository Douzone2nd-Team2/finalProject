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
          <tr>
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
          </tr>
        </table>
      </TableContainer>
    </Container>
  );
};

export default AdminMain;
