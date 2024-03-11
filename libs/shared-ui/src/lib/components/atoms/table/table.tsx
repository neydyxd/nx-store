import { DataGrid } from "@mui/x-data-grid";

const Table = ({rows, columns} : {rows: any, columns: any}) => {
  return(
    <DataGrid
        rows={rows}
        columns={columns.map((column:any) => ({ ...column, flex: 1 }))}
        disableColumnMenu
        autoHeight
        hideFooter
        sx={{
          backgroundColor: 'white'
        }}
      />
  );
}

export default Table;
