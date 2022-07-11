// import { React, useState } from 'react';
// // import { over } from 'stompjs';
// // import SockJS from 'sockjs-client';
// import { getCookie } from '../utils/cookie';

// import { useLocation } from 'react-router-dom';

// import { useRecoilValue } from 'recoil';

// import { userState } from '../recoil/user';

// import { MainContainer, Container } from '../styles/ReservationLayout';

// import ReservationHeader from '../components/Reservation/ReservationHeader/ReservationHeader';
// import ResourceInfo from '../components/Reservation/ResourceInfo/ResourceInfo';
// import AdditionalInfo from '../components/Reservation/AdditionalInfo/AdditionalInfo.js';
// import CalendarInfo from '../components/Reservation/Calendar/CalendarInfo.js';

// let stompClient = null;

// const Reserve = () => {
//   const user = useRecoilValue(userState);
//   const resourceData = useLocation();

//   console.log(user);
//   console.log(resourceData.state);

//   const [step, setStep] = useState(0);
//   const [cateNo, setCateNo] = useState(3); // 바뀔 일 없으니까 구조분해할당으로 하자

//   const [reservationData, setReservationData] = useState({}); // 예약 정보 뭐뭐있더라

//   const [userData, setUserData] = useState({
//     username: '',
//     receivername: '',
//     connected: false,
//     message: '',
//   });

//   const connect = () => {
//     let Sock = new SockJS(`${process.env.REACT_APP_SERVER_PORT}/ws`);
//     stompClient = over(Sock);
//     let headers = {
//       Authorization: getCookie('accessToken'),
//     };
//     stompClient.connect(headers, onConnected, onError);
//   };

//   const onConnected = () => {
//     setUserData({ ...userData, connected: true });
//     stompClient.subscribe('/announce/public', onMessageReceived);
//     stompClient.subscribe(
//       '/user/' + userData.username + '/do',
//       onPrivateMessage,
//     );
//   };

//   const userJoin = () => {
//     var chatMessage = {
//       senderName: userData.username,
//       status: 'JOIN',
//       // data: {
//       //   resourceNo: '1',
//       //   startTime: '2022-07-02 00:00:00',
//       //   endTime: '2022-07-02 01:30:00', // 1차적으로는 자원이랑 시작시간, 종료시간
//       //   // reservName: '예약2',
//       //   // peopleCnt: ['1', '2'], // 2차로 추가 정보 입력
//       // },
//       data: {
//         resourceNo: '27',
//         startTime: '2022-06-30 00:00:00',
//         endTime: '2022-10-01 00:00:00',
//       },
//     };
//     stompClient.send('/app/timelist', {}, JSON.stringify(chatMessage));
//     // stompClient.send('/app/check', {}, JSON.stringify(chatMessage));
//     // stompClient.send('/app/reserve', {}, JSON.stringify(chatMessage));
//   };

//   const onError = (err) => {
//     console.log(err);
//   };

//   const onMessageReceived = (payload) => {
//     var payloadData = JSON.parse(payload.body);
//     switch (payloadData.status) {
//       case 'MESSAGE':
//         console.log('message : ' + payloadData);
//         break;
//     }
//   };

//   const onPrivateMessage = (payload) => {
//     console.log(payload);
//     var payloadData = JSON.parse(payload.body);
//     console.log(payloadData);
//   };

//   const getTimelist = () => {
//     var chatMessage = {
//       senderName: userData.username,
//       receivername: userData.username,
//       status: 'MESSAGE',
//       data: {
//         resourceNo: '27',
//         startTime: '2022-06-30 00:00:00',
//         endTime: '2022-10-01 00:00:00',
//       },
//     };
//     stompClient.send('/app/timelist', {}, JSON.stringify(chatMessage));
//   };

//   return (
//     <MainContainer>
//       <ReservationHeader title="자원 이름"></ReservationHeader>
//       <Container>
//         <ResourceInfo></ResourceInfo>
//         <button onClick={connect}>연결</button>
//         {step === 0 ? (
//           <CalendarInfo
//             setStep={setStep}
//             cateNo={cateNo}
//             stompClient={stompClient}
//             username={userData.username}
//           ></CalendarInfo>
//         ) : step === 1 ? (
//           <AdditionalInfo setStep={setStep} cateNo={cateNo}></AdditionalInfo>
//         ) : null}
//       </Container>
//     </MainContainer>
//   );
// };

// export default Reserve;
