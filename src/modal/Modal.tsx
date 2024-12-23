import { Button, TextField } from "@mui/material";
import "../styles/Modal.css";
import { useEffect, useState } from "react";
import { TaskProps } from "../types/tasks.type";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  taskToEdit: TaskProps | null;
  handleEditTask: (updatedTask: Partial<TaskProps>) => void;
}

const Modal = ({ isOpen, closeModal, taskToEdit, handleEditTask }: Props) => {
  const [title, setTitle] = useState<string>(taskToEdit?.title || "");
  const [description, setDescription] = useState<string>(taskToEdit?.description || "");

   useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = () => {
    if (title.trim() && description.trim() && taskToEdit) {
      handleEditTask({ id: taskToEdit.id, title, description });
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="container-modal">
      <div className="bg-color-modal">
        <p>
          <label htmlFor="name">Title*</label>
          <TextField
            id="filled-basic"
            label="New name..."
            variant="filled"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="description">Description*</label>
          <TextField
            id="filled-basic"
            label="New Description..."
            variant="filled"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>

        <div className="btn-add-task-modal">
          <Button variant="outlined" onClick={handleSubmit}>
            SUBMIT
          </Button>
          <Button variant="outlined" onClick={closeModal}>
            CLOSE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;