import Main from '../../components/templates/main/main';
import Table from '../../components/atoms/table/table';

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
      <Table rows={rows} columns={columns} />
    </div>
  );

  return <Main mainContent={mainContent} />;
};

export default MainPage;
