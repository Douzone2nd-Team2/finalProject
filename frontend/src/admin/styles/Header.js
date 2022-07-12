import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 10px solid #3d73ff;
  font-family: NanumGothicBold;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 16px;
`;

export const LogoContainer = styled.div`
  font-size: 30px;
  color: #0a58ca;
  margin-left: 20px;
`;
export const LogoutContainer = styled.div`
  margin-right: 20px;
  font-size: 20px;

  padding: 8px;
  button {
    font-weight: bold;
    border: none;
    background-color: white;
  }
`;
