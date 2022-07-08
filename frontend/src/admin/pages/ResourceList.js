import { Container, HeadContainer } from '../styles/RegisterBook';
import { useState } from 'react';

const ResourceList = () => {
  const [selected, setSelected] = useState('');

  const handleChange = (e) => {
    setSelected(e.target.value);
  };
  return (
    <>
      <Container>
        <HeadContainer>
          예약관리 <span className="fa-solid fa-arrow-right-long" /> 자원별
          예약관리
        </HeadContainer>
        <select
          onChange={handleChange}
          value={selected}
          style={{ float: 'right', marginTop: '10px' }}
        >
          <option value="0">전체</option>
          <option value="1">회의실</option>
          <option value="2">차량</option>
          <option value="3">노트북</option>
          <option value="4">북마크</option>
        </select>
      </Container>
    </>
  );
};

export default ResourceList;
