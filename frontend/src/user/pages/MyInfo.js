import {
  Container,
  TitleContainer,
  InfoContainer,
  ImgContainer,
  ContentContainer,
} from '../styles/MyInfo';

const MyInfo = () => {
  return (
    <>
      <Container>
        <TitleContainer>사원 정보</TitleContainer>
        <hr />
        <InfoContainer>
          <ImgContainer>
            <img src={process.env.PUBLIC_URL + '/login.png'} alt="Logo" />
          </ImgContainer>
          <form>
            <ContentContainer>
              <label htmlFor="name">이름</label>
              <input type="text" name="name" id="name" />
            </ContentContainer>
            <ContentContainer>
              <label htmlFor="id">아이디</label>
              <input type="text" name="id" id="id" />
            </ContentContainer>
            <ContentContainer>
              <label htmlFor="birth">생년월일</label>
              <input type="date" name="birth" id="birth" />
            </ContentContainer>
            <ContentContainer>
              <label htmlFor="dept">부서</label>
              <input type="text" name="dept" id="dept" />
            </ContentContainer>
            <ContentContainer>
              <label htmlFor="rank">직급</label>
              <input type="text" name="rank" id="rank" />
            </ContentContainer>
            <ContentContainer>
              <label htmlFor="wnum">사원번호</label>
              <input type="num" name="wnum" id="wnum" />
            </ContentContainer>
            <ContentContainer>
              <label htmlFor="pnum">전화번호</label>
              <input type="tel" name="pnum" id="pnum" />
            </ContentContainer>
            <ContentContainer>
              <label htmlFor="email">이메일</label>
              <input type="email" name="email" id="email" />
            </ContentContainer>
          </form>
        </InfoContainer>
      </Container>
    </>
  );
};

export default MyInfo;
