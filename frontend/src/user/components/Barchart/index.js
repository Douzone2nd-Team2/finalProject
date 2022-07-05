import { useState } from 'react';

import BchartItem from './BchartItem';

import SelectContainer from '../../styles/Select';

const Bchart = () => {
  const [catenum, setCatenum] = useState('');

  const handleChange = (e) => {
    setCatenum(e.target.value);
  };

  return (
    <div>
      <SelectContainer>
        <select
          onChange={handleChange}
          value={catenum}
          style={{ float: 'right', marginTop: '9px', marginRight: '170px' }}
        >
          <option value="1">회의실</option>
          <option value="2">차량</option>
          <option value="3">노트북</option>
        </select>
      </SelectContainer>
      <BchartItem catenum={catenum} />
    </div>
  );
};

export default Bchart;
