import { useState } from 'react';

import BchartItem from './BchartItem';

const Bchart = () => {
  const [selected, setSelected] = useState('');

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <select
        onChange={handleChange}
        value={selected}
        style={{ float: 'right', marginTop: '9px', marginRight: '170px' }}
      >
        <option value="1">회의실</option>
        <option value="2">차량</option>
        <option value="3">노트북</option>
      </select>
      <BchartItem selected={selected} />
    </div>
  );
};

export default Bchart;
