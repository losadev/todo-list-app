import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, TaskProps } from "../types/tasks.type";

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, actions:PayloadAction<TaskProps>)=> {
      state.data.push(actions.payload);
    },
      updateTask: (state, actions)=> {

    },
      deleteTask: (state, actions:PayloadAction<number>)=> {

    },
      toggleComplete: (state, actions)=> {

    },
  }
})

export const {addTask, updateTask, deleteTask, toggleComplete} = tasksSlice.actions;

export default tasksSlice.reducer;