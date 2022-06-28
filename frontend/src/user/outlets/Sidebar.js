import { useRecoilValue } from 'recoil';

import { userNameState } from '../recoil/user';

import {
  SidebarContainer,
  ContentContainer,
  ImageContainer,
  InfoContainer,
  NameContainer,
} from '../styles/Sidebar';

import profile from '../assets/profile.jpeg';

const Sidebar = () => {
  const userName = useRecoilValue(userNameState);
  console.log(userName);
  return (
    <SidebarContainer>
      <ContentContainer>
        <ImageContainer>
          <img src={profile} alt="profile" />
        </ImageContainer>
        <InfoContainer>
          <NameContainer>{userName}</NameContainer>
          <div>가수</div>
          <div>아이즈원</div>
          <div>라비앙로즈</div>
          <div>2001년생</div>
        </InfoContainer>
      </ContentContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
