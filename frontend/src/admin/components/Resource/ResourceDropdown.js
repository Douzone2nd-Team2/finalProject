import { useState } from 'react';

import ResourceCard from './ResourceCard';

const ResourceDropdown = () => {
  const [selected, setSelected] = useState('');

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <select
        onChange={handleChange}
        value={selected}
        style={{ float: 'right', marginTop: '10px' }}
      >
        <option value="1">회의실</option>
        <option value="2">차량</option>
        <option value="3">노트북</option>
      </select>
      <ResourceCard selected={selected} />
    </div>
  );
};
export default ResourceDropdown;
