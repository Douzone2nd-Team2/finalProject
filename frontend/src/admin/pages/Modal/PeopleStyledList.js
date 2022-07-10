import { isOptionGroup } from '@mui/base';
import { useEffect, useState } from 'react';
import {
  ListContainer,
  ListHeader,
  ListBody,
  ListRow,
  ListContent,
  ListButton,
} from './peoleStyle';

const PeopleStyledList = (props) => {
  const [peopleList, setPeopleList] = useState([]);

  const peopleSelect = (no, name) => {
    console.log(no);
    props.setUserNo(no);
    props.setUserName(name);
    // props.setResourceNo(resourceNo);
    // props.setResourceName(resourceName);
    // props.setCateNo(cateNo);
    alert(name + '님을 선택하셨습니다.');
    props.setClose(true);
  };

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
              <ListRow key={item.resourceNo}>
                <ListContent>{item.empNo}</ListContent>
                <ListContent>{item.deptName}</ListContent>
                <ListContent>{item.gradeName}</ListContent>
                <ListContent>{item.name}</ListContent>
                <ListContent>
                  <ListButton
                    onClick={() => {
                      peopleSelect(item.no, item.name);
                    }}
                  >
                    선택
                  </ListButton>
                </ListContent>
              </ListRow>
            );
          })}
      </ListBody>
    </ListContainer>
  );
};

export default PeopleStyledList;
