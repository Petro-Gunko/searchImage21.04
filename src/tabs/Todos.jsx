import FormToDo from "../components/FormToDo/FormToDo";
import { Text } from 'components';
import { useEffect, useState } from 'react';
import {TodoList} from '../components/TodoList/TodoList'
import {EditForm} from '../components/EditForm/EditForm'
import Modal from 'react-modal';
Modal.setAppElement('#root');

export const Todos = () => {
  const [todos, setTodos] = useState(()=>{
    const savedTodos = window.localStorage.getItem('todos list');
    if (savedTodos !== null) {
      return JSON.parse(savedTodos)
    } return ([])
  });
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

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
const openModal= () => {
      setIsOpen(true)      
     }
const closeModal = () => {
      setIsOpen(false)
    }

const changeTodo = (todoId) => {
  const todoToChange = todos.find(todo => todo.id === todoId);
    setSelectedTodo(todoToChange);
  openModal()
}


  return (<div>
    {todos.length === 0 && <Text textAlign="center">There are no any todos ...</Text>}
    <FormToDo onSubmit={addTodo} />
  <TodoList todos={todos} onDelete={deleteTodo} onChange={changeTodo}/>
<EditForm isOpen={modalIsOpen} closeModal={closeModal} todoData={selectedTodo}/>
  </div>)
};
