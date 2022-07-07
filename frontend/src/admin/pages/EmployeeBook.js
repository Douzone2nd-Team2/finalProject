import { Container, HeadContainer } from '../styles/RegisterBook';

const EmployeeBook = () => {
  return (
    <>
      <Container>
        <HeadContainer>
          예약관리 <span className="fa-solid fa-arrow-right-long" /> 사용자별
          예약관리
        </HeadContainer>
      </Container>
    </>
  );
};

export default EmployeeBook;
