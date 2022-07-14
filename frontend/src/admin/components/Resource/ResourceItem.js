import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { getCookie } from '../../utils/cookie';
import {
  ResourceCard,
  ResourceCardTitle,
  ResourceCategory,
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
    availableTime,
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
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PORT}/resource/detail?resourceNo=${resourceNo}`,
        {
          headers: {
            Authorization: getCookie('accessToken'),
          },
        },
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
      <Card style={{ border: 'none' }}>
        <Card.Img
          style={{ width: '100%', height: '150px', border: 'none' }}
          src={path}
        />
        <Card.Body>
          <ResourceCardTitle>{resourceName}</ResourceCardTitle>
          <ResourceCategory>
            {cateNo == 1 ? (
              <>
                <p className="price_origin">인원 : {people}</p>
              </>
            ) : cateNo == 2 || cateNo == 3 ? (
              <>
                <p className="price_origin">개수 : {people}</p>
              </>
            ) : (
              <></>
            )}
            <p className="price_origin">옵션 : {option}</p>
            <p className="price_origin">이용가능한 시간 : {availableTime}</p>
            <p>{content}</p>
          </ResourceCategory>
        </Card.Body>
      </Card>
    </ResourceCard>
  );
};

export default ResourceItem;
