import React from 'react';
import {
  FooterContainer,
  RightContainer,
  Address,
  DivContainer,
  VerticalLine,
  UnderLine,
} from '../styles/Footer';

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <div>
          사업자 등록번호 : 123-456-789 통신판매업신고: 2022-서울송파-1124
        </div>
        <div>호스팅서비스 제공자 : Amazon Web Service(AWS)</div>
        <div>Email: 42DA@douzone.co.kr </div>
        <hr />
        <div>
          서울특별시 송파구 중대로 135, 서관 12층 (가락동) 대표전화 :
          02-2188-6900 사업자번호 : 214-82-04799
        </div>
      </div>
      <RightContainer>
        <DivContainer>
          <span className="fa-brands fa-facebook" />
          <span className="fa-brands fa-instagram" />
          <span className="fa-brands fa-twitter" />
          <span className="fa-brands fa-medium" />
        </DivContainer>
        <br />
        <Address>Copyright@42DA</Address>
        <br />
        <DivContainer>
          <UnderLine>이용약관</UnderLine>
          <VerticalLine />
          <UnderLine>개인정보처리방침</UnderLine>
        </DivContainer>
      </RightContainer>
    </FooterContainer>
  );
};

export default Footer;
