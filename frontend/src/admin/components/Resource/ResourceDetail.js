import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ResourceDetail = () => {
  const location = useLocation();

  console.log(location.state.resourceNo);
  return <>resourceDetail 실행</>;
};

export default ResourceDetail;
