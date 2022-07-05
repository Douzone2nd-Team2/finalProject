import { MainContainer, Container } from '../styles/ReservationLayout';

import ReservationHeader from '../components/Reservation/ReservationHeader/ReservationHeader';
import ResourceInfo from '../components/Reservation/ResourceInfo/ResourceInfo';
import AdditionalInfo from '../components/Reservation/AdditionalInfo/AdditionalInfo.js';
import CalendarInfo from '../components/Reservation/Calendar/CalendarInfo.js';

const Reserve = () => {
  return (
    <MainContainer>
      <ReservationHeader></ReservationHeader>
      <Container>
        <ResourceInfo></ResourceInfo>
        <CalendarInfo></CalendarInfo>
        {/* <AdditionalInfo></AdditionalInfo> */}
      </Container>
    </MainContainer>
  );
};

export default Reserve;
