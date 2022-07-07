import { useState } from 'react';

const ReservationDropdown = () => {
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
        <option value="0">전체</option>
        <option value="1">회의실</option>
        <option value="2">차량</option>
        <option value="3">노트북</option>
        <option value="4">북마크</option>
      </select>
    </div>
  );
};
export default ReservationDropdown;
