import { Column } from 'react-table';
export interface ColumnProps {
  id: string;
  client: string;
  date: any;
  phone: number | string;
  resume: string;
  status: string;
  userId: string;
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
    Header: 'ID',
    accessor: 'id',
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
    accessor: 'userId',
  },
];
