import { Column } from 'react-table';
export interface ColumnProps {
  client: string;
  date: number | string;
  phone: number | string;
  resume: string;
  status: string;
  userID: number;
}

export const COLUMNS: Column<ColumnProps>[] = [
  {
    Header: 'Client',
    accessor: 'client',
  },
  {
    Header: 'Date',
    accessor: 'date',
  },
  {
    Header: 'Phone',
    accessor: 'phone',
  },
  {
    Header: 'Resume',
    accessor: 'resume',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'UserID',
    accessor: 'userID',
  },
];
