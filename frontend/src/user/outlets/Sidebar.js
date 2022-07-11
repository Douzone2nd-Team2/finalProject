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
  ToggleContainer2,
} from '../styles/Sidebar';

import profile from '../assets/profile.jpeg';

const Sidebar = () => {
  const user = useRecoilValue(userState);
  const [isOpenToggle, setIsOpenToggle] = useState(false);
  const toggleInfo = useRef();
  const hideInfo = () => {
    toggleInfo.current.style.visibility = 'hidden';
    toggleInfo.current.style.opacity = '0';
    toggleInfo.current.style.transition =
      'visibility 0s linear 500ms, opacity 600ms';
    setIsOpenToggle(!isOpenToggle);
  };

  const showInfo = () => {
    toggleInfo.current.style.visibility = 'visible';
    toggleInfo.current.style.opacity = '1';
    toggleInfo.current.style.transition =
      'visibility 0s linear 0s, opacity 600ms';
    setIsOpenToggle(!isOpenToggle);
  };

  return (
    <>
      <SidebarContainer ref={toggleInfo}>
        <ContentContainer>
          <ImageContainer>
            <img src={user.imageUrl} alt="profile" />
          </ImageContainer>
          <InfoContainer>
            <NameContainer>{user.name}</NameContainer>
            {/* <div>아이디 : {user.empNo}</div> */}
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
        <ToggleContainer2>
          {isOpenToggle && (
            <button onClick={showInfo}>
              <span className="fa-solid fa-arrow-right" />
            </button>
          )}
        </ToggleContainer2>
      </SidebarContainer2>
    </>
  );
};

export default Sidebar;
