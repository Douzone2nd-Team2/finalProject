import { Container, HeadContainer } from '../styles/RegisterBook';

import ReservationDropdown from '../components/reservation/ReservationDropdown';

const ResourceList = () => {
  return (
    <>
      <Container>
        <HeadContainer>
          예약관리 <span className="fa-solid fa-arrow-right-long" /> 자원별
          예약관리
        </HeadContainer>
        <ReservationDropdown />
      </Container>
    </>
  );
};

export default ResourceList;
