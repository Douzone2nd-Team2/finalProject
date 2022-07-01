import { useRecoilValue } from 'recoil';

import { userState } from '../recoil/user';

import {
  SidebarContainer,
  ContentContainer,
  ImageContainer,
  InfoContainer,
  NameContainer,
} from '../styles/Sidebar';

import profile from '../assets/profile.jpeg';

const Sidebar = () => {
  const user = useRecoilValue(userState);
  console.log(user);
  return (
    <SidebarContainer>
      <ContentContainer>
        <ImageContainer>
          <img src={profile} alt="profile" />
        </ImageContainer>
        <InfoContainer>
          <NameContainer>{user.name}</NameContainer>
          <div>아이디 : {user.empNo}</div>
          <div>부서 : {user.deptName}</div>
          <div>직급 : {user.gradeName}</div>
        </InfoContainer>
      </ContentContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
