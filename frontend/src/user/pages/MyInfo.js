import { userState } from '../recoil/user';
import { useRecoilValue } from 'recoil';

import {
  Container,
  TitleContainer,
  InfoContainer,
  ImgContainer,
  ContentContainer,
} from '../styles/MyInfo';

import profile from '../assets/profile.jpeg';

const MyInfo = () => {
  const user = useRecoilValue(userState);

  return (
    <>
      <Container>
        <TitleContainer>사원 정보</TitleContainer>
        <hr />
        <InfoContainer>
          <ImgContainer>
            <img src={profile} alt="Profile" />
          </ImgContainer>
          <form>
            <ContentContainer>
              <label htmlFor="name">이름</label>
              <input
                type="text"
                name="name"
                id="name"
                disabled="disabled"
                value={user.name || ''}
              />
            </ContentContainer>
            <ContentContainer>
              <label htmlFor="id">아이디</label>
              <input
                type="text"
                name="id"
                id="id"
                disabled="disabled"
                value={user.userId || ''}
              />
            </ContentContainer>
            <ContentContainer>
              <label htmlFor="birth">생년월일</label>
              <input
                type="text"
                name="birth"
                id="birth"
                disabled
                value={user.birth || ''}
              />
            </ContentContainer>
            <ContentContainer>
              <label htmlFor="dept">부서</label>
              <input
                type="text"
                name="dept"
                id="dept"
                disabled="disabled"
                value={user.deptNo || ''}
              />
            </ContentContainer>
            <ContentContainer>
              <label htmlFor="rank">직급</label>
              <input
                type="text"
                name="rank"
                id="rank"
                disabled="disabled"
                value={user.gradeNo || ''}
              />
            </ContentContainer>
            <ContentContainer>
              <label htmlFor="wnum">사원번호</label>
              <input
                type="num"
                name="wnum"
                id="wnum"
                disabled="disabled"
                value={user.empNo || ''}
              />
            </ContentContainer>
            <ContentContainer>
              <label htmlFor="pnum">전화번호</label>
              <input
                type="tel"
                name="pnum"
                id="pnum"
                disabled="disabled"
                value={user.phone || ''}
              />
            </ContentContainer>
            <ContentContainer>
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                name="email"
                id="email"
                disabled="disabled"
                value={user.email || ''}
              />
            </ContentContainer>
          </form>
        </InfoContainer>
      </Container>
    </>
  );
};

export default MyInfo;
