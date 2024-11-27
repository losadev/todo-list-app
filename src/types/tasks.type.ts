export interface TaskProps {
  id:number
  name: string,
  description: string,
  date: string,
  completed: boolean
}

export interface TaskState {
  data: TaskProps[] 
}

export const initialState:TaskState = {
  data: []
}

export interface TableTaskProps {
  handleChangeCompleted: (id:number)=>void;
  handleClickDelete: (id:number)=>void;
  tasks: TaskProps[];
}