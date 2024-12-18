import { Alert, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../store/tasksSlicer";
import { FormFields, TaskProps } from "../types/tasks.type";
import '../styles/AddTask.css';
import { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';

const AddTask = () => {
  const [taskAdded, setTaskAdded] = useState<boolean>(false);
  const {register, handleSubmit,setValue, formState: {errors}} = useForm<FormFields>({
    defaultValues: {
      title: "",
      description: ""
    }
  });
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    const {title, description} = data;
    const today = new Date();
      const todayString = today.toISOString().split('T')[0];
      
      const newTask:TaskProps = {
        id: Date.now(),
        title: title,
        description:description,
        date: todayString,
        completed: false
      }
      dispatch(addTask(newTask));
     
  
      setTaskAdded(true);
      setValue('title', '');
      setValue('description', '');
  
  }
  return (
     <div className="container-xl">
      <h1>Add new tasks</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container-add-task">
            <p>
              <label htmlFor="name">Name*</label>
              <TextField style={{color: "#34495e"}} id="filled-basic" label="Name..." variant="filled" {...register('title',{
                required: 'Title is required'
              })}/>
            </p>
            {errors.title && (<div className="error-title" style={{color: 'red'}}>{errors.title.message}</div>)}
            <p>
              <label htmlFor="name">Description*</label>
              <TextField id="filled-basic" label="Description..." variant="filled" {...register('description')} />
            </p>
            
            <div className="btn-add-task">
              <button type="submit">Add new task</button>
            </div>
          </div>
        </form>
        {taskAdded && (<Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Task succesfully registered.
        </Alert>)}
    </div>
  );
}

export default AddTask;