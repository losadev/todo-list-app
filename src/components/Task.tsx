import { TaskProps } from "../types/tasks.type";
import '../styles/Task.css';

const Task = ({name,description, date, completed}:TaskProps) => {
  return (
    <>
      <div className="container-task">
        <span>{name}</span>
        <span>{description}</span>
        <span>{date}</span>
        <span>{completed}</span>
        <div className="container-btn">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </>
  )
}

export default Task;