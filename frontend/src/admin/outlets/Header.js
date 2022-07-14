import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import {
  HeaderContainer,
  LogoContainer,
  LogoutContainer,
} from '../styles/Header';

import { FiLogOut } from 'react-icons/fi';

function Header() {
  const navigate = useNavigate();

  const [_, removeCookie] = useCookies(['accessToken']);

  const deleteCookie = () => {
    removeCookie('accessToken');
    navigate('/admin/login');
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link
          to="/admin/main"
          style={{ textDecoration: 'none', color: '#3d73ff' }}
        >
          42DA
        </Link>
      </LogoContainer>
      <LogoutContainer>
        <button onClick={deleteCookie}>
          로그아웃
          <span className="fa-solid fa-right-from-bracket" />
        </button>
      </LogoutContainer>
    </HeaderContainer>
  );
}
export default Header;
