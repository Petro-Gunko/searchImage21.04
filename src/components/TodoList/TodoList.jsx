import { Grid } from "../Grid/Grid";
import { TodoListItem } from "../TodoListItem/TodoListItem";


export const TodoList = ({todos})=> {
  return (
    <Grid>
  {todos.map((todo) => (
    <TodoListItem data={todo} key={todo.id}/>
  ))}
</Grid>
  );
};
