import React from "react";
import { SbContainer, SbTile, SbUl, SbLi } from "./StyledUtil";

import {
  BsFillPersonFill,
  BsReverseLayoutTextSidebarReverse,
  BsCalendar4Week,
  BsVolumeUp,
} from "react-icons/bs";

function Sidebar() {
  return (
    <SbContainer>
      <SbTile>관리자 전용</SbTile>
      <SbUl>
        <SbLi>
          <BsFillPersonFill /> 사용자관리
        </SbLi>
        <SbLi>
          <BsReverseLayoutTextSidebarReverse /> 자원관리
        </SbLi>
        <SbLi>
          <BsCalendar4Week /> 예약관리
        </SbLi>
        <SbLi>
          <BsVolumeUp /> 공지사항 관리
        </SbLi>
      </SbUl>
    </SbContainer>
  );
}

export default Sidebar;
