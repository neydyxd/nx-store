import { TableRow } from '@mui/material';
import TableRowCell from '../../atoms/table-row-sell/table-row-sell';

const TableRows = ({ data } : {data: any}) => {
  return (
    <TableRow>
      {data.map((cellData:any, index: any) => (
        <TableRowCell key={index}>{cellData}</TableRowCell>
      ))}
    </TableRow>
  );
};

export default TableRows;
