import { isOptionGroup } from '@mui/base';
import { useEffect, useState } from 'react';
import {
  ListContainer,
  ListHeader,
  ListBody,
  ListRow,
  ListContent,
} from './style.js';

const StyledList = (props) => {
  const [peopleList, setPeopleList] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const [checkNameList, setCheckNameList] = useState([]);

  const changeHandler = (checked, id, name) => {
    if (checked) {
      setCheckNameList([...checkNameList, name]);
      setCheckList([...checkList, id]);
    } else {
      setCheckList(checkList.filter((el) => id !== el));
      setCheckNameList(checkNameList.filter((el) => name !== el));
    }
  };
  props.setCheckList(checkList);
  props.setCheckNameList(checkNameList);

  useEffect(() => {
    setPeopleList(props.peopleList);
    //setCheckList(new Array(peopleList.length).fill(false));
  });

  return (
    <ListContainer>
      <ListHeader>
        <ListContent></ListContent>
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
                <ListContent>
                  <input
                    type="checkbox"
                    id="checkEmp"
                    onClick={(e) => {
                      changeHandler(
                        e.currentTarget.checked,
                        item.no,
                        item.name,
                      );
                    }}
                  ></input>
                </ListContent>
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
