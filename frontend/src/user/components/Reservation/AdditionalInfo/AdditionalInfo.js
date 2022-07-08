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
    props.setStep(2);
  };

  const onPreviousStep = () => {
    props.setStep(0);
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
