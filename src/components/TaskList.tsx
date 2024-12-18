import { memo } from "react";
import { TableTaskProps } from "../types/tasks.type";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TaskList = memo(({handleChangeCompleted, handleClickDelete,openModal,tasks}:TableTaskProps) => {

  return (
  <>
    <table>
      <div className="thead">
        <th>Title</th>
        <th>Descrption</th>
        <th>Date</th>
        <th>Completed</th>
        <th>Actions</th>
      </div>
      <div className="tbody">
        {tasks.map((task,index)=> (
          <tr key={index}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.date}</td>
            <td>
              <input type="checkbox" name="completed" onChange={() => handleChangeCompleted(index)}/>
            </td>
            <td>
              <div className="container-btn">
                <button onClick={()=> handleClickDelete(index)} ><MdDelete id="btn-delete"/></button>
                <button onClick={()=> openModal(index)} ><FaEdit id="btn-edit"/></button> 
              </div>
            </td>
          </tr>
        ))}
      </div>
    </table> 
  </>
  )
});

export default TaskList;