import React, { useMemo } from 'react';
import { useTable, Column, useGlobalFilter } from 'react-table';
import { COLUMNS } from './columns';
import { ColumnProps } from './columns';
import { StyledTable, StyledTh, StyledTd, StyledTbody, StyledThead, StyledTr } from './table.styles';
import MOCK_DATA from '../../mock_data/MOCK_DATA.json';
import TableFilter from '../TableFilter/TableFilter';

function Table() {
  const columns: Column<ColumnProps>[] = useMemo(() => COLUMNS, []);
  const data: ColumnProps[] = useMemo(() => MOCK_DATA, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setGlobalFilter, state } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
  );

  const { globalFilter } = state;

  return (
    <>
      <TableFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <StyledTable {...getTableProps()}>
        <StyledThead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <StyledTh {...column.getHeaderProps()}>{column.render('Header')}</StyledTh>
              ))}
            </tr>
          ))}
        </StyledThead>
        <StyledTbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <StyledTr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <StyledTd {...cell.getCellProps()}>{cell.render('Cell')}</StyledTd>;
                })}
              </StyledTr>
            );
          })}
        </StyledTbody>
      </StyledTable>
    </>
  );
}

export default Table;
