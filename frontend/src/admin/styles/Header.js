import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 10px solid #3d73ff;
  font-family: NanumGothicBold;
  background-color: white;
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
