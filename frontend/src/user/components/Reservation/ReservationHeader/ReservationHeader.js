import { Header, HeaderTop, HeaderBottom, Title } from './style.js';
import { useEffect, useState } from 'react';

const ReservationHeader = (props) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(props.title);
  });

  return (
    <Header>
      <HeaderTop>
        <Title>{title}</Title>
      </HeaderTop>
      <HeaderBottom></HeaderBottom>
    </Header>
  );
};

export default ReservationHeader;
