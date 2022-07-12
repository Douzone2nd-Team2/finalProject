import { userState } from '../recoil/user';
import { useRecoilValue } from 'recoil';

import {
  Container,
  TitleContainer,
  InfoContainer,
  ImgContainer,
  ContentContainer,
  KeyContainer,
  ValueContainer,
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
            {user.imageUrl ? (
              <img src={user.imageUrl} alt="Profile" />
            ) : (
              <div>
                <span class="fa-solid fa-circle-user fa-10x" />
              </div>
            )}
          </ImgContainer>
          <div display="flex" justifyContent="center">
            <ContentContainer>
              <KeyContainer>이름</KeyContainer>
              <ValueContainer>{user.name || ''}</ValueContainer>
            </ContentContainer>
            <ContentContainer>
              <KeyContainer>아이디</KeyContainer>
              <ValueContainer>{user.userId || ''}</ValueContainer>
            </ContentContainer>
            <ContentContainer>
              <KeyContainer>생년월일</KeyContainer>
              <ValueContainer>{user.birth || ''}</ValueContainer>
            </ContentContainer>
            <ContentContainer>
              <KeyContainer>부서</KeyContainer>
              <ValueContainer>{user.deptName || ''}</ValueContainer>
            </ContentContainer>
            <ContentContainer>
              <KeyContainer>직급</KeyContainer>
              <ValueContainer>{user.gradeName || ''}</ValueContainer>
            </ContentContainer>
            <ContentContainer>
              <KeyContainer>사원번호</KeyContainer>
              <ValueContainer>{user.empNo || ''}</ValueContainer>
            </ContentContainer>
            <ContentContainer>
              <KeyContainer>전화번호</KeyContainer>
              <ValueContainer>{user.phone || ''}</ValueContainer>
            </ContentContainer>
            <ContentContainer>
              <KeyContainer>이메일</KeyContainer>
              <ValueContainer>{user.email || ''}</ValueContainer>
            </ContentContainer>
          </div>
        </InfoContainer>
      </Container>
    </>
  );
};

export default MyInfo;
