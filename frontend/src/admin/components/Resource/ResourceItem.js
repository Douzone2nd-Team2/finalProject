import { Link } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import ResourceCard from '../../styles/ResourceCard';

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
  } = resource;

  const handleClick = () => {};

  return (
    <ResourceCard>
      <Link to="/admin/resourcedetail" state={{ resourceNo: resourceNo }}>
        <Card
          onClick={() => handleClick()}
          // on
          // style={{
          //   width: '200px',
          //   marginRight: '30px',
          // }}
        >
          <Card.Img style={{ width: 'auto', height: '150px' }} src={path} />
          <Card.Body>
            {resourceNo}

            <Card.Title>{resourceName}</Card.Title>
            <Card.Text>{content}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </ResourceCard>
  );
};

export default ResourceItem;
