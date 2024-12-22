import { useCallback, useState } from "react";
import { deleteTask, toggleComplete } from "../store/tasksSlicer";
import { useDispatch, useSelector } from "react-redux";
import TaskList from "../components/TaskList";
import Modal from "../modal/Modal";
import { RootState } from "../store/store";
import '../styles/TaskTable.css';
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { RiProgress3Line } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { TaskProps } from "../types/tasks.type";


const Dashboard = () => {
  const tasks = useSelector((state: RootState) => state.tasks.data);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [taskCompleted, setTaskCompleted] = useState<TaskProps[] | null>(null);
  const [taskIncompleted, setTaskIncompleted] = useState<TaskProps[] | null>(null);

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

  const handlerFilterCompleted = () => {
    const tasksCompleted = tasks.filter((task) => task.completed !== true);
    setTaskCompleted(tasksCompleted);
  }
  const handlerFilterIncompleted = () => {
    const tasksIncompleted = tasks.filter((task) => task.completed !== true);
    setTaskIncompleted(tasksIncompleted);
  }

  return (
    <div className="container-xl">
      <h1>List of tasks</h1>
      <div className="container-table">
        <h4>Filters</h4>
        <div className="container-filters">
          <button style={{backgroundColor:"lightgreen"}} className="btn-filter-complete" onClick={handlerFilterCompleted}>Completed <IoCheckmarkDoneCircleSharp style={{color:'green'}} /></button>
          <button style={{backgroundColor:"rgb(255, 114, 114)"}} onClick={handlerFilterIncompleted}>Incompleted <RiProgress3Line style={{color:"red"}}/></button>
          <button style={{backgroundColor:'lightgray'}}>All <FaTasks/></button>
        </div>
        <TaskList handleChangeCompleted={handleChangeCompleted} handleClickDelete={handleClickDelete} openModal={openModal} tasks={taskCompleted ? taskCompleted:taskIncompleted ? taskIncompleted: tasks}/>
        <Modal closeModal={closeModal} isOpen={isModalOpen}/>
      </div>
    </div>
  );
}

export default Dashboard;