import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { getCookie } from '../utils/cookie';

const UserBookhandle = () => {
  const location = useLocation();
  const reservNo = location.state.reservNo;
  console.log(location.state.reservNo);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_PORT}/admin/reservation/view?reservNo=${reservNo}`,
        {
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

  return <div>사용자 예약 조회, 수정</div>;
};

export default UserBookhandle;
