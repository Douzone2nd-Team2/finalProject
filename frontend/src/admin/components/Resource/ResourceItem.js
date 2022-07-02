import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const ResourceItem = ({ resource, resource_file }) => {
  const {
    resourceNo,
    category,
    able,
    resourceName,
    location,
    people,
    availavleTime,
    adminNo,
    option,
    fuel,
    createAt,
    modifyAt,
  } = resource;
  return (
    <Card
      style={{
        width: '200px',
        marginRight: '30px',
      }}
    >
      <Card.Img variant="top" src="" />
      <Card.Body>
        {resourceNo}
        <Card.Title> {resourceName}</Card.Title>
        <Card.Subtitle>
          {category},{location},{people},{option},{able},{availavleTime}
        </Card.Subtitle>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>생성일 : {createAt}</ListGroupItem>
        <ListGroupItem>수정일 : {modifyAt}</ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default ResourceItem;
