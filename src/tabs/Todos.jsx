import FormToDo from "../components/FormToDo/FormToDo";
import { Text } from 'components';
import { useEffect, useState } from 'react';
import {TodoList} from '../components/TodoList/TodoList'

export const Todos = () => {
  const [todos, setTodos] = useState(()=>{
    const savedTodos = window.localStorage.getItem('todos list');
    if (savedTodos !== null) {
      return JSON.parse(savedTodos)
    } return ([])
  });

useEffect(()=> {
  window.localStorage.setItem('todos list', JSON.stringify(todos))
}, [todos])

  const addTodo = (newTodo) => {
    setTodos(prevTodos => {
      return [...prevTodos, newTodo]
    })
  }

const deleteTodo = (todoId) => {
  setTodos(prevTodos => {
    return prevTodos.filter((todo) => todo.id !== todoId)
  })
}

  return (<div>
    {todos.length === 0 && <Text textAlign="center">There are no any todos ...</Text>}
  
  <FormToDo onSubmit={addTodo} />
  <TodoList todos={todos} onDelete={deleteTodo}/>
  </div>)
};
