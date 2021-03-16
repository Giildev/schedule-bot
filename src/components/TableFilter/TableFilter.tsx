import React from 'react';
import { StyledIcon, StyledLabel, StyledSearchInput } from './tableFilter.styles';
import './style.css';

interface Props {
  filter: string;
  setFilter: Function;
}

const TableFilter = ({ filter, setFilter }: Props) => {
  return (
    <StyledLabel>
      <StyledIcon status="Primary" name="search" />
      <StyledSearchInput value={filter || ''} onChange={(e) => setFilter(e.target.value)}></StyledSearchInput>
    </StyledLabel>
  );
};

export default TableFilter;
