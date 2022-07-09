import { isOptionGroup } from '@mui/base';
import { useEffect, useState } from 'react';
import {
  ListContainer,
  ListHeader,
  ListBody,
  ListRow,
  ListContent,
} from '../Modal/style copy';

const StyledList = (props) => {
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    setPeopleList(props.peopleList);
  });

  return (
    <ListContainer>
      <ListHeader>
        <ListContent>사번</ListContent>
        <ListContent>부서</ListContent>
        <ListContent>직급</ListContent>
        <ListContent>이름</ListContent>
      </ListHeader>
      <ListBody>
        {peopleList &&
          peopleList.map((item) => {
            return (
              <ListRow key={item.no}>
                <ListContent>{item.empNo}</ListContent>
                <ListContent>{item.deptName}</ListContent>
                <ListContent>{item.gradeName}</ListContent>
                <ListContent>{item.name}</ListContent>
              </ListRow>
            );
          })}
      </ListBody>
    </ListContainer>
  );
};

export default StyledList;
