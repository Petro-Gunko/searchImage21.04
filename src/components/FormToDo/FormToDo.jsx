import style from './FormToDo.module.css'
import { useState } from 'react';

export default function FormToDo({onSubmit}) {
    const [query, setQuery] = useState('')

    const onChange = (e) => {
      setQuery(e.target.value)
    }
  

    const handleSubmit = (e) => {
e.preventDefault()

onSubmit({
    text: e.target.elements.text.value,
    id: Date.now(),
})

setQuery('');
}

    return (
        <form onSubmit={handleSubmit} className={style.form}>
          <button className={style.button} type="submit">Add 
        </button>
    
          <input
            value={query}
            onChange={onChange}
            className={style.input}
            placeholder="What do you want to write?"
            name="text"
            required
            autoFocus
          />
        </form>
      );
}
