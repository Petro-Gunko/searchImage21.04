import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import Modal from 'react-modal';
import style from './EditForm.module.css';
import { useState } from 'react';

export const EditForm = ({ isOpen, closeModal, todos, onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({
      text: e.target.elements.text.value,
      id: Date.now(),
    });

    setQuery('');
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <form className={style.form} onSubmit={handleSubmit}>
        <button
          className={style.submitButton}
          type="submit"
          // onClick={() => closeModal()}
        >
          <RiSaveLine color="green" size="16px" />
        </button>

        <button
          className={style.editButton}
          type="button"
          onClick={() => closeModal()}
        >
          <MdOutlineCancel color="red" size="16px" />
        </button>

        <input
          className={style.input}
          placeholder="What do you want to write?"
          name="text"
          required
          defaultValue={todos.text}
          autoFocus
          value={query}
          onChange={onChange}
        />
      </form>
    </Modal>
  );
};
