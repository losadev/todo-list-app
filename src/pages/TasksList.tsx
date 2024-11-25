import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { TaskProps } from '../types/tasks.type';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 180 },
  { field: 'description', headerName: 'Description', width: 320 },
  { field: 'date', headerName: 'Date', width: 100 },
  {field: 'completed',headerName: 'Completed',width: 100,type: 'boolean',},
];

export default function DataTable() {
  const tasks = useSelector((state:RootState)=> state.tasks.data);
  return (
    <div className="container-xl">
      <h1>List of tasks</h1>
      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={tasks.map((task: TaskProps, index:number) => ({ id: index + 1, ...task }))}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { page: 0, pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
}

