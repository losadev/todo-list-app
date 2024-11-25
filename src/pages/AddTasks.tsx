//import { RootState } from "@reduxjs/toolkit/query";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TaskProps } from "../types/tasks.type";
import { addTask } from "../store/tasksSlicer";
// import Task from "../components/Task";
import CheckIcon from '@mui/icons-material/Check';
import '../styles/AddTask.css';
import { Alert, Button, TextField } from "@mui/material";

const TasksList = () => {
  const dispatch = useDispatch();
  const [newTaskName, setNewTaskName] = useState<string>('');
  const [newTaskDescription, setNewTaskDescription] = useState<string>('');
  const createdTasMsg = 'Task succesfully registered!';
  const [newTaskAdded, setNewTaskAdded] = useState<boolean>(false);

  const handleCreateTask = () => {
    if(newTaskName && newTaskDescription) {
      const today = new Date();
      const todayString = today.toISOString().split('T')[0];
      
      const newTask:TaskProps = {
        name: newTaskName,
        description:newTaskDescription,
        date: todayString,
        completed: false
      }
      dispatch(addTask(newTask));
      setNewTaskDescription('');
      setNewTaskName('');
      setNewTaskAdded(true);
    }
  }

  return (
    <div className="container-xl">
      <h1>Welcome @user</h1>
      
      <div className="container-add-task">
        
        <p>
          <label htmlFor="name">Name*</label>
          <TextField id="filled-basic" label="Name..." variant="filled" value={newTaskName} onChange={e => setNewTaskName(e.target.value)}/>
        </p>
        
        <p>
          <label htmlFor="name">Description*</label>
          <TextField id="filled-basic" label="Description..." variant="filled" value={newTaskDescription} onChange={e => setNewTaskDescription(e.target.value)}/>
        </p>
        
        <div className="btn-add-task">
          <Button onClick={handleCreateTask} variant="contained">Add Task</Button>
        </div>
        
      </div>

      {newTaskAdded ? (
       <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          {createdTasMsg}
      </Alert>): ''}

    </div>
  )
}

export default TasksList;