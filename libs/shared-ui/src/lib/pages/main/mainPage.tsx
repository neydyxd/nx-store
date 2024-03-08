import { colors } from '@mui/material';
import SimpleTable from '../../components/organisms/table/table';
import Main from '../../components/templates/main/main';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID'},
  {
    field: 'firstName',
    headerName: 'First name',
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    editable: true,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const MainPage = () => {
  const mainContent = (
    <div>
      <DataGrid
        rows={rows}
        columns={columns.map((column) => ({ ...column, flex: 1 }))}
        disableColumnMenu
        autoHeight
        hideFooter
        sx={{
          backgroundColor: 'white'
        }}
      />
    </div>
  );

  return <Main mainContent={mainContent} />;
};

export default MainPage;
