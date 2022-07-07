import { atom } from 'recoil';

export const userState = atom({
  key: '#adminState',
  default: {},
});

export const empState = atom({
  key: '#empState',
  default: {},
});
