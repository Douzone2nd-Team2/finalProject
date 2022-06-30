import React from 'react';
import {
  HeaderContainer,
  LogoContainer,
  LogoutContainer,
} from '../styles/Header';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/admin" style={{ textDecoration: 'none', color: '#3d73ff' }}>
          42DA
        </Link>
      </LogoContainer>
      <LogoutContainer>
        로그아웃
        <FiLogOut />
      </LogoutContainer>
    </HeaderContainer>
  );
}
export default Header;
