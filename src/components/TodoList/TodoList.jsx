import { Grid } from "../Grid/Grid";
import { TodoListItem } from "../TodoListItem/TodoListItem";


export const TodoList = ({todos, onDelete})=> {
  return (
    <Grid>
  {todos.map((todo) => (
    <TodoListItem data={todo} key={todo.id} onDelete={onDelete}/>
  ))}
</Grid>
  );
};
