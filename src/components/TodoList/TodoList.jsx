import { Grid } from "../Grid/Grid";
import { TodoListItem } from "../TodoListItem/TodoListItem";


export const TodoList = ({todos, onDelete, onChange})=> {
  return (
    <Grid>
  {todos.map((todo) => (
    <TodoListItem data={todo} key={todo.id} onDelete={onDelete} onChange={onChange}/>
  ))}
</Grid>
  );
};
