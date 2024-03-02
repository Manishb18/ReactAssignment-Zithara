import React from 'react';

function SortBy({ setSortby}) {
  const handleSortChange = (e) => {
    setSortby(e.target.value);
  };

  return (
    <div className='mr-10'>
      <label htmlFor="sortby">Sort By:</label>
      <select id="sortby" onChange={handleSortChange}>
        <option value="">None</option>
        <option value="dateA">Date (Ascending)</option>
        <option value="dateD">Date (Descending)</option>
        <option value="timeA">Time (Ascending)</option>
        <option value="timeD">Time (Descending)</option>
      </select>
    </div>
  );
}

export default SortBy;
