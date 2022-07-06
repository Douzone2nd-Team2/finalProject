import {
  AdditionalInfoContainer,
  ButtonContainer,
  ReserveButton,
} from './style.js';
import DateTime from './DateTime/DateTime.js';
import UserInfo from './UserInfo/UserInfo.js';
import Count from './Count/Count.js';

const AdditionalInfo = (props) => {
  const onNextStep = () => {
    props.callback((step) => step + 1);
  };

  const onPreviousStep = () => {
    props.callback((step) => (step > 0 ? step - 1 : 0));
  };

  return (
    <AdditionalInfoContainer>
      <DateTime></DateTime>
      <UserInfo></UserInfo>
      {props.cateNo === 1 ? <Count></Count> : null}
      <ButtonContainer>
        <ReserveButton onClick={onPreviousStep}>이전</ReserveButton>
        <ReserveButton onClick={onNextStep}>예약</ReserveButton>
      </ButtonContainer>
    </AdditionalInfoContainer>
  );
};

export default AdditionalInfo;
