import {
  FlexContainer,
  UserInfoContainer,
  UserInfoTitle,
  UserInfoDetail,
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
        <UserInfoDetail>팀 파이널 프로젝트 회의</UserInfoDetail>
      </UserInfoContainer>
    </FlexContainer>
  );
};

export default UserInfo;
