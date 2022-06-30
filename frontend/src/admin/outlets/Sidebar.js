import React from 'react';
import { SbContainer, SbUl, SbLi } from '../styles/Sidebar';
import { Link } from 'react-router-dom';
import {
  BsFillPersonFill,
  BsReverseLayoutTextSidebarReverse,
  BsCalendar4Week,
  BsVolumeUp,
} from 'react-icons/bs';

function Sidebar() {
  return (
    <SbContainer>
      <SbUl>
        <Link
          to="/admin/employee"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <SbLi>
            <BsFillPersonFill /> 사용자관리
          </SbLi>
        </Link>
        <Link
          to="/admin/resource"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <SbLi>
            <BsReverseLayoutTextSidebarReverse /> 자원관리
          </SbLi>
        </Link>
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
