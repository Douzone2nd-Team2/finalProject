import * as React from 'react';
import {
  Container,
  ResourceContainer,
  ResourceContainer2,
} from '../../styles/Resource.js';
import ResourceDropdown from './ResourceDropdown';
import ResourceInput from './ResourceInput';
const ResourcePage = () => {
  return (
    <>
      <Container>
        <ResourceContainer>
          <ResourceInput />
          자원목록
        </ResourceContainer>
        <ResourceContainer2>
          <ResourceDropdown />
        </ResourceContainer2>
      </Container>
    </>
  );
};

export default ResourcePage;
