import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import Modal from 'react-modal';
import style from './EditForm.module.css'

export const EditForm = ({isOpen, closeModal, todoData}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <form className={style.form}>
  <button className={style.submitButton} type="submit">
    <RiSaveLine color="green" size="16px" />
  </button>

  <button className={style.editButton} type="button">
    <MdOutlineCancel color="red" size="16px" />
  </button>

  <input
    className={style.input}
    placeholder="What do you want to write?"
    name="text"
    required
    // defaultValue={defaultValue}
    autoFocus
  />
</form>
    </Modal>
  )
};
