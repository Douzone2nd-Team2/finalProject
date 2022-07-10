import { isOptionGroup } from '@mui/base';
import { useEffect, useState } from 'react';
import {
  ListContainer,
  ListHeader,
  ListBody,
  ListRow,
  ListContent,
  ListButton,
} from '../Modal/style copy';

const ResourceStyledList = (props) => {
  const [resourceList, setResourceList] = useState([]);

  const resourceSelect = (resourceNo, resourceName, cateNo) => {
    console.log(cateNo);
    props.setResourceNo(resourceNo);
    props.setResourceName(resourceName);
    props.setCateNo(cateNo);
    alert(resourceName + '을(를) 선택하셨습니다.');
    props.setClose(true);
  };

  useEffect(() => {
    setResourceList(props.resourceList);
  });

  return (
    <ListContainer>
      <ListHeader>
        <ListContent>분류</ListContent>
        <ListContent>이름</ListContent>
        <ListContent>선택</ListContent>
      </ListHeader>
      <ListBody>
        {resourceList &&
          resourceList.map((item) => {
            return (
              <ListRow key={item.resourceNo}>
                <ListContent>{item.cateName}</ListContent>
                <ListContent>{item.resourceName}</ListContent>
                <ListContent>
                  <ListButton
                    onClick={() => {
                      resourceSelect(
                        item.resourceNo,
                        item.resourceName,
                        item.cateNo,
                      );
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

export default ResourceStyledList;
