import { useDispatch, useSelector } from 'react-redux';
import '../styles/TaskList.css';
import { deleteTask, toggleComplete } from '../store/tasksSlicer';
import TaskTable from '../components/TaskTable';
import { RootState } from '../store/store';
import { useCallback, useState } from 'react';
import Modal from '../modal/Modal';

const TaskList = () => {
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
      <TaskTable 
        handleChangeCompleted={handleChangeCompleted} 
        handleClickDelete={handleClickDelete}
        openModal={openModal} 
        tasks={tasks}
      />
      <Modal closeModal={closeModal} isOpen={isModalOpen}/>
    </div>
  );
}

export default TaskList;