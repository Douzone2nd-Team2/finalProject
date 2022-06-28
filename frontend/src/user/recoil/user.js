import { atom } from 'recoil';

export const userNoState = atom({
  key: '#userState',
  default: '',
});

export const userNameState = atom({
  key: '#userNameState',
  default: '',
});
