import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, TaskProps } from "../types/tasks.type";

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action:PayloadAction<TaskProps>)=> {
      state.data.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<Partial<TaskProps>>) => {
      const { id, title, description } = action.payload;
      const task = state.data.find((task) => task.id === id);
      if (task) {
        if (title) task.title = title;
        if (description) task.description = description;
      }
    },
    deleteTask: (state, action:PayloadAction<number>)=> {
        const id = action.payload;
        const tasks = state.data.filter(task => task.id !== id);
        state.data = tasks;
    },
    toggleComplete: (state, action)=> {
      const id = action.payload;
      const task = state.data.find((task)=> task.id === id);
      
      if(task){
        if(task.completed === true) {
          task.completed = false;
        }else {
          task.completed = true;
        }
      }
    },
  }
})

export const {addTask, updateTask, deleteTask, toggleComplete} = tasksSlice.actions;

export default tasksSlice.reducer;