import * as React from 'react';
import { Container, ResourceContainer } from '../styles/Resource.js';
import ResourceDropdown from '../components/Resource/ResourceDropdown.js';
import ResourceInput from '../components/Resource/ResourceInput.js';
const ResourcePage = () => {
  return (
    <>
      <Container>
        <ResourceContainer>
          <ResourceInput />
          자원목록
        </ResourceContainer>
        <ResourceDropdown />
      </Container>
    </>
  );
};

export default ResourcePage;
