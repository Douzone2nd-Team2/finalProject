import React from 'react';
import { HContainer, HImg, HButtom } from '../styles/StyledUtil';

function Header() {
  return (
    <HContainer>
      <HImg src={process.env.PUBLIC_URL + 'logo.png'} />
      <HButtom>로그아웃</HButtom>
    </HContainer>
  );
}

export default Header;
