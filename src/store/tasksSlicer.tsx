import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, TaskProps } from "../types/tasks.type";

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action:PayloadAction<TaskProps>)=> {
      state.data.push(action.payload);
    },
      updateTask: (state, actions)=> {

    },
      deleteTask: (state, action:PayloadAction<number>)=> {
        
    },
      toggleComplete: (state, actions)=> {

    },
  }
})

export const {addTask, updateTask, deleteTask, toggleComplete} = tasksSlice.actions;

export default tasksSlice.reducer;