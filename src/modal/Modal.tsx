import { Button, TextField } from "@mui/material";
import '../styles/Modal.css';

interface Props {
  isOpen: boolean;
  closeModal: ()=> void
}

const Modal = ({isOpen,closeModal}: Props) => {
  if(!isOpen) return null;
  return (
    <div className="container-modal">
      <div className="bg-color-modal">
       <p>
          <label htmlFor="name">Name*</label>
          <TextField id="filled-basic" label="New Name..." variant="filled"/>
        </p>
        
        <p>
          <label htmlFor="name">Description*</label>
          <TextField id="filled-basic" label="New Description..." variant="filled" />
        </p>
        
        <div className="btn-add-task-modal">
          <Button variant="outlined" onClick={closeModal}>SUBMIT</Button>
          <Button variant="outlined" onClick={closeModal}>CLOSE</Button>
        </div>
      </div>
    </div>
  )
}

export default Modal;