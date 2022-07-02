import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 999;
  border-bottom: 10px solid #3d73ff;
  font-family: NanumGothicBold;
  background-color: white;
`;

export const LogoContainer = styled.div`
  font-size: 30px;
  color: #0a58ca;
`;
export const LogoutContainer = styled.div`
  justify-content: right;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  padding: 8px;
`;
