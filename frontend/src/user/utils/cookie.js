import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const getCookie = (key) => {
  return cookies.get(key);
};
