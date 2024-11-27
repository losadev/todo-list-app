import { useDispatch, useSelector } from 'react-redux';
import '../styles/TaskList.css';
import { deleteTask, toggleComplete } from '../store/tasksSlicer';
import TaskTable from '../components/TaskTable';
import { RootState } from '../store/store';

export default function DataTable() {
  const tasks = useSelector((state: RootState) => state.tasks.data);
  const dispatch = useDispatch();

  const handleChangeCompleted = (id:number)=> {
    dispatch(toggleComplete(id));
  }

  const handleClickDelete = (id:number) => {
    dispatch(deleteTask(id));
  }

  
  return (
    <div className="container-xl">
      <h1>List of tasks</h1>
      <TaskTable 
        handleChangeCompleted={handleChangeCompleted} 
        handleClickDelete={handleClickDelete} 
        tasks={tasks}/>
    </div>
  );
}

