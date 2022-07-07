import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import {
  ResourceCard,
  ResourceCardTitle,
  ResourceContent,
  ResourceOpion,
} from '../../styles/ResourceCard';

const ResourceItem = ({ resource }) => {
  const {
    resourceNo,
    able,
    content,
    resourceName,
    location,
    people,
    availavleTime,
    adminNo,
    option,
    fuel,
    createAt,
    modifyAt,
    path,
    cateNo,
  } = resource;

  return (
    <ResourceCard>
      <Link
        to="/admin/resourceupdate"
        state={{
          resourceNo: resourceNo,
          resourceName: resourceName,
          able: able,
          content: content,
          location: location,
          people: people,
          availavleTime: availavleTime,
          fuel: fuel,
          adminNo: adminNo,
          option: option,
          createAt: createAt,
          modifyAt: modifyAt,
          cateNo: cateNo,
        }}
      >
        <Card>
          <Card.Img style={{ width: 'auto', height: '150px' }} src={path} />
          <Card.Body>
            <ResourceCardTitle>
              {resourceNo}. {resourceName}
            </ResourceCardTitle>
            <ResourceOpion>{option}</ResourceOpion>
            <ResourceContent>{content}</ResourceContent>
          </Card.Body>
        </Card>
      </Link>
    </ResourceCard>
  );
};

export default ResourceItem;
