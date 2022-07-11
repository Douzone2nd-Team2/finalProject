import { atom } from 'recoil';

export const reservationState = atom({
  key: '#reservationState',
  default: {
    userNo: 1,
    userName: '',
    startTime: '',
    endTime: '',
    resourceNo: 1,
    able: 'Y',
    reservName: '',
    startDate: new Date(),
    endDate: new Date(),
  },
});
