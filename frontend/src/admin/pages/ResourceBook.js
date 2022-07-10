import { useLocation } from 'react-router-dom';

import RePresentBook from '../components/Reservation/RePresentBook';
import RePrevBook from '../components/Reservation/RePrevBook';

import {
  Container,
  HeadContainer,
  BookContainer,
} from '../styles/ResourceBook';

const ResourceBook = () => {
  const location = useLocation();

  const resourceName = location.state.resourceName;
  const resourceNo = location.state.resourceNo;

  console.log('resourceName: ' + location.state.resourceName);
  console.log('resourceNo: ' + location.state.resourceNo);

  return (
    <Container>
      <HeadContainer>{resourceName}</HeadContainer>
      <BookContainer>
        <RePresentBook resourceNo={resourceNo} />
        <RePrevBook resourceNo={resourceNo} />
      </BookContainer>
    </Container>
  );
};

export default ResourceBook;
