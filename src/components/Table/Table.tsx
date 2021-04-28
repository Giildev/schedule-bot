/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React, { useEffect, useMemo, useState } from 'react';
import { useTable, Column, useGlobalFilter } from 'react-table';
import { COLUMNS } from './columns';
import { ColumnProps } from './columns';
import { StyledTable, StyledTh, StyledTd, StyledTbody, StyledThead, StyledTr } from './table.styles';
import useGetSchedule from '../../firebase/hooks/useGetSchedule';
import TableFilter from '../TableFilter/TableFilter';

function Table() {
  const [schedules, loading, error] = useGetSchedule();
  const columns: Column<ColumnProps>[] = useMemo(() => COLUMNS, []);
  const [webo, setWebo] = useState<any>([]);

  useEffect(() => {
    schedules &&
      schedules.map((data: any) => {
        setWebo([...webo, data]);
      });
  }, [schedules]);

  const data: any = useMemo(() => schedules, [schedules]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setGlobalFilter, state } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
  );

  const { globalFilter } = state;
  console.log(schedules);
  // Try async await to useGetSchedule in line 12

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
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
      )}
    </>
  );
}

export default Table;
