import { RootState } from "@reduxjs/toolkit/query";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskProps } from "../types/tasks.type";
import { addTask } from "../store/tasksSlicer";
import Task from "../components/Task";
import '../styles/TaskList.css';

const TasksList = () => {
  const tasks = useSelector((state: RootState)=>state.tasks);
  const dispatch = useDispatch();
  const [newTaskName, setNewTaskName] = useState<string>('');
  const [newTaskDescription, setNewTaskDescription] = useState<string>('');

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
    }
  }

  return (
    <div className="container-xl">
      <h1>Welcome @user</h1>
      <div className="container-add-task">
        <p>
          <label htmlFor="name">Name*</label>
          <input type="text" value={newTaskName} onChange={e => setNewTaskName(e.target.value)}/>
        </p>
        <p>
          <label htmlFor="name">Description*</label>
          <input type="text" value={newTaskDescription} onChange={e => setNewTaskDescription(e.target.value)}/>
        </p>
        <div className="btn-add-task">
          <button onClick={handleCreateTask}>Add task</button>
        </div>
      </div>
      
      <div className="container-task-list">
        <ul>
          {tasks.data.map((task:TaskProps, index:number)=> (
            <li key={index}>
              <Task {...task}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TasksList;