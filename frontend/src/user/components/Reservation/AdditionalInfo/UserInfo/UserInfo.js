import {
  FlexContainer,
  UserInfoContainer,
  UserInfoTitle,
  UserInfoDetail,
  UserInfoInput,
} from './style.js';

const UserInfo = () => {
  return (
    <FlexContainer>
      <UserInfoContainer>
        <UserInfoTitle>예약자</UserInfoTitle>
        <UserInfoDetail>이정민</UserInfoDetail>
      </UserInfoContainer>
      <UserInfoContainer>
        <UserInfoTitle>예약명</UserInfoTitle>
        <UserInfoInput></UserInfoInput>
      </UserInfoContainer>
    </FlexContainer>
  );
};

export default UserInfo;
