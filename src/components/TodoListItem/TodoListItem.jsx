import {GridItem} from '../GridItem/GridItem'
import {Text} from '../Text/Text'
import { RiDeleteBinLine } from 'react-icons/ri';
import style from './TodoListItem.module.css'

export const TodoListItem = ({data, onDelete}) => {


  return(
    <GridItem >
  <div className={style.box}>
    <Text textAlign="center" marginBottom="20">
      TODO 
    </Text>
    <Text> {data.text}</Text>
    <button className={style.deleteButton} type="button" onClick={()=>onDelete(data.id)}>
      <RiDeleteBinLine size={24} />
    </button>
  </div>
</GridItem>
  );
};
