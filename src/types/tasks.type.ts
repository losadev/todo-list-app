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
  handleChangeCompleted: (id: number) => void;
  handleClickDelete: (id: number) => void;
  openModal: (id:number)=>void;
  tasks: TaskProps[];
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (name: string, description: string) => void;
  taskId: number | null;  // Puede ser null cuando no haya tarea seleccionada
  taskData: { name: string; description: string }; // Datos de la tarea a editar
}

