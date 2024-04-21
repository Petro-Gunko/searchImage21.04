import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css'
import { useState } from 'react';

export const Form = ({ onSubmit }) => {

  const [query, setQuery] = useState('')

  const onChainge = (e) => {
    setQuery(e.target.value)
  }

  const formSubmit = (e) => {
    e.preventDefault()
    onSubmit(query)
    setQuery('');

  }

  return (
    <form onSubmit={formSubmit} className={style.form}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        value={query}
        onChange={onChainge}
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
