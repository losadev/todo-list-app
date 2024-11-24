export interface TaskProps {
  name: string,
  description: string,
  date: string,
  completed: boolean
}

interface TaskState {
  data: TaskProps[] 
}

export const initialState:TaskState = {
  data: []
}