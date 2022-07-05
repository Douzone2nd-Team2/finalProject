import {
  AdditionalInfoContainer,
  ButtonContainer,
  ReserveButton,
} from './style.js';
import DateTime from './DateTime/DateTime.js';
import UserInfo from './UserInfo/UserInfo.js';
import Count from './Count/Count.js';

const AdditionalInfo = () => {
  return (
    <AdditionalInfoContainer>
      <DateTime></DateTime>
      <UserInfo></UserInfo>
      <Count></Count>
      <ButtonContainer>
        <ReserveButton>예약</ReserveButton>
      </ButtonContainer>
    </AdditionalInfoContainer>
  );
};

export default AdditionalInfo;
