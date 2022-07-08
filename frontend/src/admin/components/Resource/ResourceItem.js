import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import {
  ResourceCard,
  ResourceCardTitle,
  ResourceContent,
  ResourceOpion,
} from '../../styles/ResourceCard';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResourceItem = (props) => {
  const [resourceItem, setResourceItem] = useState('');
  const navigate = useNavigate();
  // const resourceNo = resource.resourceNo;
  const {
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
    resourceNo,
  } = props.resource;

  const getResourceNo = async (resourceNo) => {
    // console.log(resourceNo);
    // const param = { resourceNo: resourceNo };
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PORT}/resource/detail?resourceNo=${resourceNo}`,
      )
      .then((response) => {
        setResourceItem(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getResourceNo(resourceNo);
  }, []);

  const handleResourceView = (resourceNo) => {
    console.log(resourceNo);
    navigate('/admin/resourceupdate', {
      state: resourceNo,
    });
  };

  return (
    <ResourceCard
      onClick={() => {
        handleResourceView(resourceNo);
      }}
    >
      {/* <Link
        to="/admin/resourceupdate"
        state={{
          resourceNo: resourceNo,
        }}
      > */}
      <Card style={{ height: '240px' }}>
        <Card.Img
          style={{ width: '100%', height: '150px', borderBottom: '1px solid' }}
          src={path}
        />
        <Card.Body>
          <ResourceCardTitle>
            {resourceNo}. {resourceName}
          </ResourceCardTitle>
          <ResourceOpion>{option}</ResourceOpion>
          <ResourceContent>{content}</ResourceContent>
        </Card.Body>
      </Card>
      {/* </Link> */}
    </ResourceCard>
  );
};

export default ResourceItem;
