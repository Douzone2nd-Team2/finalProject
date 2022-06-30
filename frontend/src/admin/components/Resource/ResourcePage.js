import * as React from 'react';
import { Container, ResourceContainer } from '../../styles/ResourceStyle';
import ResourceCard from './ResourceCard';
const ResourcePage = () => {
  return (
    <>
      <Container>
        <ResourceContainer>자원목록</ResourceContainer>
        <ResourceCard />
      </Container>
    </>
  );
};

export default ResourcePage;
