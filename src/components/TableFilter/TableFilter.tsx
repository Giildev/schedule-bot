import React from 'react';

interface Props {
  filter: string;
  setFilter: Function;
}

const TableFilter = ({ filter, setFilter }: Props) => {
  return (
    <span>
      <input placeholder="Filter" value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
};

export default TableFilter;
