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


const Dashboard = () => {
  let tasks = useSelector((state: RootState) => state.tasks.data);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [filter,setFilter] = useState<string>('all');

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

  const filterCompleted = () => setFilter("completed");
  const filterIncompleted = () => setFilter("incompleted");
  const filterAll = () => setFilter("all");

  const filteredTasks = tasks.filter(task => {
    if(filter === 'completed') return task.completed
    if(filter === 'incompleted') return !task.completed
    if(filter === 'all') return task
  });

  return (
    <div className="container-xl">
      <h1>List of tasks</h1>
      <div className="container-table">
        <h4>Filters</h4>
        <div className="container-filters">
          <button style={{backgroundColor:"lightgreen"}} className="btn-filter-complete" onClick={filterCompleted}>Completed <IoCheckmarkDoneCircleSharp style={{color:'green'}} /></button>
          <button style={{backgroundColor:"rgb(255, 114, 114)"}} onClick={filterIncompleted}>Incompleted <RiProgress3Line style={{color:"red"}}/></button>
          <button style={{backgroundColor:'lightgray'}} onClick={filterAll}>All <FaTasks/></button>
        </div>
        <TaskList handleChangeCompleted={handleChangeCompleted} handleClickDelete={handleClickDelete} openModal={openModal} tasks={filteredTasks}/>
        <Modal closeModal={closeModal} isOpen={isModalOpen}/>
      </div>
    </div>
  );
}

export default Dashboard;