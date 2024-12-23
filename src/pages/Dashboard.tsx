
import { useCallback, useState } from "react";
import { deleteTask, toggleComplete, updateTask } from "../store/tasksSlicer";
import { useDispatch, useSelector } from "react-redux";
import TaskList from "../components/TaskList";
import { RootState } from "../store/store";
import "../styles/TaskTable.css";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { RiProgress3Line } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import Modal from "../modal/Modal";
import { TaskProps } from "../types/tasks.type";

const Dashboard = () => {
  const tasks = useSelector((state: RootState) => state.tasks.data);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<TaskProps | null>(null);

  const handleChangeCompleted = useCallback(
    (id: number) => {
      dispatch(toggleComplete(id));
    },
    [dispatch]
  );

  const handleClickDelete = (id: number) => {
    dispatch(deleteTask(id));
  };

  const filterCompleted = () => setFilter("completed");
  const filterIncompleted = () => setFilter("incompleted");
  const filterAll = () => setFilter("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incompleted") return !task.completed;
    if (filter === "all") return task;
  });

  const openEditModal = (task: TaskProps) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTaskToEdit(null);
  };

 const handleEditTask = (updatedTask: Partial<TaskProps>) => {
  if (updatedTask.id !== undefined) {
    dispatch(updateTask(updatedTask));
    closeModal();
  }
};


  return (
    <div className="container-xl">
      <h1>List of tasks</h1>
      <div className="container-table">
        <h4>Filters</h4>
        <div className="container-filters">
          <button
            style={{ backgroundColor: "lightgreen" }}
            className="btn-filter-complete"
            onClick={filterCompleted}
          >
            Completed <IoCheckmarkDoneCircleSharp style={{ color: "green" }} />
          </button>
          <button
            style={{ backgroundColor: "rgb(255, 114, 114)" }}
            onClick={filterIncompleted}
          >
            Incompleted <RiProgress3Line style={{ color: "red" }} />
          </button>
          <button style={{ backgroundColor: "lightgray" }} onClick={filterAll}>
            All <FaTasks />
          </button>
        </div>
        <TaskList
          handleChangeCompleted={handleChangeCompleted}
          handleClickDelete={handleClickDelete}
          tasks={filteredTasks}
          openEditModal={openEditModal}
        />
        <Modal
          closeModal={closeModal}
          isOpen={isModalOpen}
          taskToEdit={taskToEdit}
          handleEditTask={handleEditTask}
        />
      </div>
    </div>
  );
};

export default Dashboard;