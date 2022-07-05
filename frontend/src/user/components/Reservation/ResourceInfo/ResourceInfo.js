import {
  ResourceInfoContainer,
  ResourceImageTest,
  ResourceDetatilTest,
} from './style.js';

import Option from './ResourceOption/Option.js';

const ResourceInfo = () => {
  return (
    <ResourceInfoContainer>
      <ResourceImageTest></ResourceImageTest>
      <ResourceDetatilTest>
        <Option></Option>
      </ResourceDetatilTest>
    </ResourceInfoContainer>
  );
};

export default ResourceInfo;
