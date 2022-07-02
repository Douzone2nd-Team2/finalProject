import { useState, useRef } from 'react';

import { useRecoilValue } from 'recoil';

import { userState } from '../recoil/user';

import {
  SidebarContainer,
  SidebarContainer2,
  ContentContainer,
  ImageContainer,
  InfoContainer,
  NameContainer,
  ToggleContainer,
} from '../styles/Sidebar';

import profile from '../assets/profile.jpeg';

const Sidebar = () => {
  const user = useRecoilValue(userState);
  const [isOpenToggle, setIsOpenToggle] = useState(false);
  const toggleInfo = useRef();

  const hideInfo = () => {
    toggleInfo.current.style.display = 'none';
    setIsOpenToggle(!isOpenToggle);
  };

  const showInfo = () => {
    toggleInfo.current.style.display = 'flex';
    setIsOpenToggle(!isOpenToggle);
  };

  return (
    <>
      <SidebarContainer ref={toggleInfo}>
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
        <ToggleContainer>
          <button onClick={hideInfo}>
            <span className="fa-solid fa-arrow-left" />
          </button>
        </ToggleContainer>
      </SidebarContainer>
      <SidebarContainer2>
        <ToggleContainer>
          {isOpenToggle && (
            <button onClick={showInfo}>
              <span className="fa-solid fa-arrow-right" />
            </button>
          )}
        </ToggleContainer>
      </SidebarContainer2>
    </>
  );
};

export default Sidebar;
