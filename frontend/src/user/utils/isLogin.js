import { Cookies } from 'react-cookie';

const isLogin = () => {
  return !!Cookies.get('accessToken');
};

export default isLogin;
