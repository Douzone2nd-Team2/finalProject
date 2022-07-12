// import { React, useState, useEffect } from 'react';
// import { over } from 'stompjs';
// import SockJS from 'sockjs-client';
// import { getCookie } from '../utils/cookie';

// import { useLocation } from 'react-router-dom';

// import { useRecoilValue, useSetRecoilState } from 'recoil';
// import { reservationState } from '../recoil/reservation';

// import { userState } from '../recoil/user';

// import { MainContainer, Container } from '../styles/ReservationLayout';

// import ReservationHeader from '../components/Reservation/ReservationHeader/ReservationHeader';
// import ResourceInfo from '../components/Reservation/ResourceInfo/ResourceInfo';
// import AdditionalInfo from '../components/Reservation/AdditionalInfo/AdditionalInfo.js';
// import CalendarInfo from '../components/Reservation/Calendar/CalendarInfo.js';

// const Reserve = () => {
//   const location = useLocation();
//   const user = useRecoilValue(userState);
//   const setReservationState = useSetRecoilState(reservationState); // 예약 정보 리코일
//   const reservation = useRecoilValue(reservationState);
//   const [resourceData, setResourceData] = useState(location.state);
//   const [step, setStep] = useState(0);
//   const [selectedStartDate, setSelectedStartDate] = useState('');
//   const [selectedEndDate, setSelectedEndDate] = useState('');
//   const [selectedStartTime, setSelectedStartTime] = useState('');
//   const [selectedEndTime, setSelectedEndTime] = useState('');

//   useEffect(() => {
//     setReservationState({
//       userNo: user.no,
//       resourceNo: resourceData.resourceNo,
//       userName: user.name,
//     });
//   }, []);

//   useEffect(() => {
//     console.log(resourceData);
//   }, [resourceData]);

//   return (
//     <MainContainer>
//       <ReservationHeader title="예약"></ReservationHeader>
//       <Container>
//         <ResourceInfo
//           imageUrl={resourceData.imageUrl}
//           option={resourceData.option}
//           content={resourceData.content}
//           fuel={resourceData.fuel}
//           info={resourceData.content}
//           title={resourceData.resourceName}
//         ></ResourceInfo>
//         {step === 0 ? (
//           <CalendarInfo
//             setStep={setStep}
//             cateNo={resourceData.cateNo}
//             username={user.name}
//             resourceNo={resourceData.resourceNo}
//           ></CalendarInfo>
//         ) : step === 1 ? (
//           <AdditionalInfo
//             setStep={setStep}
//             data={resourceData}
//           ></AdditionalInfo>
//         ) : null}
//       </Container>
//     </MainContainer>
//   );
// };

// export default Reserve;
