import {
  Container,
  HeadContainer,
  TitleContainer,
} from '../styles/RegisterBook';

const ResourceList = () => {
  return (
    <>
      <Container>
        <HeadContainer>
          <TitleContainer>
            예약관리 <span className="fa-solid fa-arrow-right-long" /> 자원별
            예약관리
          </TitleContainer>
        </HeadContainer>
      </Container>
    </>
  );
};

export default ResourceList;
