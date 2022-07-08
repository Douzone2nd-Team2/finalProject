import styled from 'styled-components';

const AdditionalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  width: 100%;
  height: 100%;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  margin: 0px 0px 0px 80px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  min-height: 32px;
  padding-top: 24px;
`;
const ReserveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  min-height: 36px;
  margin: 3px;
  padding: 8px;
  cursor: pointer;
  touch-action: manipulation;
  background: #1296ec;
  color: #f1f1f1;
  font-weight: 600;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 16px;
`;

export { AdditionalInfoContainer, ButtonContainer, ReserveButton };
