export interface Task {
  name: string,
  description: string,
  date: string,
  completed: boolean
}

interface TaskState {
  data: Task[] 
}

export const initialState:TaskState = {
  data: []
}