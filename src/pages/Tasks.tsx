import { useCallback, useState } from "react";
import { deleteTask, toggleComplete } from "../store/tasksSlicer";
import { useDispatch, useSelector } from "react-redux";
import TaskList from "../components/TaskList";
import Modal from "../modal/Modal";
import { RootState } from "../store/store";
import '../styles/TaskTable.css';

const Tasks = () => {
  const tasks = useSelector((state: RootState) => state.tasks.data);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleChangeCompleted = useCallback((id: number) => {
    dispatch(toggleComplete(id));
  },[dispatch]);
  
  const handleClickDelete = (id:number) => {
    dispatch(deleteTask(id));
  }

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="container-xl">
      <h1>List of tasks</h1>
      <div className="container-table">
        <TaskList handleChangeCompleted={handleChangeCompleted} handleClickDelete={handleClickDelete} openModal={openModal} tasks={tasks}/>
        <Modal closeModal={closeModal} isOpen={isModalOpen}/>
      </div>
    </div>
  );
}

export default Tasks;