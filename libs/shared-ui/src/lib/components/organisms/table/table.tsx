import { Table, TableContainer, Paper } from '@mui/material';
import TableHeader from '../../molecules/table-header/table-header';
import TableRows from '../../molecules/table-row/table-row';

const SimpleTable = ({ columns, rowsData } : {columns: any, rowsData: any}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHeader columns={columns} />
        {rowsData.map((rowData: any, index: any) => (
          <TableRows key={index} data={rowData} />
        ))}
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
