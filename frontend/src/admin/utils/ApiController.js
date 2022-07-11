import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export const Apis = axios.create({
  baseUrl: `${process.env.REACT_APP_BASE_URL}`,
  timeout: 1000,
  withCredentials: true,
});

Apis.interceptors.response.use(ResSuccess);

const ResSuccess = async (res) => {
  const navigate = useNavigate();
  const [, removeCookie] = useCookies(['accessToken']);

  if (res.data.message === 'Expired Access Token') {
    removeCookie('accessToken');
    navigate('/');
  }
  return res;
};
