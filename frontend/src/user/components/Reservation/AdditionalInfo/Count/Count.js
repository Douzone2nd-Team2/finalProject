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
} from './style';
import { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count === 0 ? 0 : count - 1);
  };

  return (
    <FlexContainer>
      <CountInfoTitle>추가 사용자</CountInfoTitle>
      <CountButtonContainer>
        <CountButton onClick={onDecrease}>
          <ArrowDownwardIcon></ArrowDownwardIcon>
        </CountButton>
        <CountInfo>{count}</CountInfo>
        <CountButton onClick={onIncrease}>
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
    </FlexContainer>
  );
};

export default Count;
