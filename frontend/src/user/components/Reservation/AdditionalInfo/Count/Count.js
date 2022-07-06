import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import SearchIcon from '@material-ui/icons/Search';

import {
  FlexContainer,
  CountButtonContainer,
  CountButton,
  CountInfo,
  PeopleContainer,
  PeopleInput,
  PeopleSearchButton,
  PeopleGridContainer,
  PeopleNameTag,
  CountInfoTitle,
  ButtonContainer,
  ReserveButton,
} from './style';

const Count = () => {
  return (
    <FlexContainer>
      <CountInfoTitle>추가 사용자</CountInfoTitle>
      <CountButtonContainer>
        <CountButton>
          <ArrowDownwardIcon></ArrowDownwardIcon>
        </CountButton>
        <CountInfo>0</CountInfo>
        <CountButton>
          <ArrowUpwardIcon></ArrowUpwardIcon>
        </CountButton>
      </CountButtonContainer>
      <PeopleContainer>
        <PeopleInput></PeopleInput>
        <PeopleSearchButton>
          <SearchIcon></SearchIcon>
        </PeopleSearchButton>
      </PeopleContainer>
      <PeopleGridContainer>
        <PeopleNameTag>이정민</PeopleNameTag>
        <PeopleNameTag>엄채린</PeopleNameTag>
        <PeopleNameTag>이정민</PeopleNameTag>
      </PeopleGridContainer>
      <ButtonContainer>
        <ReserveButton>예약</ReserveButton>
      </ButtonContainer>
    </FlexContainer>
  );
};

export default Count;
