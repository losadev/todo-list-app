import { Checkbox, Paper } from "@mui/material";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import { TableTaskProps, TaskProps } from "../types/tasks.type";

const TaskTable = ({handleChangeCompleted, handleClickDelete,openModal ,tasks}:TableTaskProps) => {
  
   const columns: GridColDef[] = [
    {field: 'completed',headerName: 'Completed',width: 100,type: 'boolean',renderCell: (params) => (
        <Checkbox 
          checked={params.value} 
          onChange={()=> handleChangeCompleted(params.row.id)}/>
      ),
    },
    { field: 'title', headerName: 'Title', width: 180, renderCell: (params)=> (
      <span style={{textDecoration: params.row.completed ? 'line-through':''}}>
        {params.value}
      </span>
    )},
    { field: 'description', headerName: 'Description', width: 320,renderCell: (params)=> (
      <span style={{textDecoration: params.row.completed ? 'line-through':''}}>
        {params.value}
      </span>
    ) },
    { field: 'date', headerName: 'Date', width: 100,renderCell: (params)=> (
      <span style={{textDecoration: params.row.completed ? 'line-through':''}}>
        {params.value}
      </span>
    ) },
    { field: 'actions', headerName: 'Actions', width: 100, renderCell: (params) => (
    <div className='container-icons' style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
      <GridDeleteIcon
        style={{ cursor: 'pointer', color: 'red' }}
        onClick={() => handleClickDelete(params.row.id)}
      />
      <EditIcon
        style={{ cursor: 'pointer', color: 'blue' }}
        onClick={()=> openModal(params.row.id)}
      />
    </div>
  ),},
  ];

  return (
     <Paper sx={{ height: 400}}>
        <DataGrid
          rows={tasks.map((task: TaskProps) => ({...task }))}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { page: 0, pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      </Paper>
  )
}

export default TaskTable;