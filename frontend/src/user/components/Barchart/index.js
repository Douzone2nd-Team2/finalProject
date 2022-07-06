import { useState } from 'react';

import BchartItem from './BchartItem';

import { BchartContainer, SelectContainer } from '../../styles/Select';

const Bchart = () => {
  const [catenum, setCatenum] = useState(1);

  const handleChange = (e) => {
    setCatenum(e.target.value);
  };

  return (
    <>
      <SelectContainer>
        <select onChange={handleChange} value={catenum}>
          <option value="1">회의실</option>
          <option value="2">차량</option>
          <option value="3">노트북</option>
        </select>
      </SelectContainer>
      <BchartContainer>
        <BchartItem catenum={catenum} />
      </BchartContainer>
    </>
  );
};

export default Bchart;
