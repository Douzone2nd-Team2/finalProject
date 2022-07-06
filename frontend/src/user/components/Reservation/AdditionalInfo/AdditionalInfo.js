import { AdditionalInfoContainer } from './style.js';
import DateTime from './DateTime/DateTime.js';
import UserInfo from './UserInfo/UserInfo.js';
import Count from './Count/Count.js';

const AdditionalInfo = () => {
  return (
    <AdditionalInfoContainer>
      <DateTime></DateTime>
      <UserInfo></UserInfo>
      <Count></Count>
    </AdditionalInfoContainer>
  );
};

export default AdditionalInfo;
