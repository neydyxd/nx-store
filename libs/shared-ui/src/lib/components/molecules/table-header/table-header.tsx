import { TableHead, TableRow } from '@mui/material';
import TableHeaderCell from '../../atoms/table-header-cell/table-header-cell';

const TableHeader = ({ columns } : {columns: any}) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column: any) => (
          <TableHeaderCell key={column}>{column}</TableHeaderCell>
        ))}
      </TableRow>
    </TableHead>
  )
};

export default TableHeader;
