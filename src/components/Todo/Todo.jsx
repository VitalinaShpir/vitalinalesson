import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export const Todo = ({text, id, handleDeleteTodo}) => {

  const handleClick = (e) =>{
    handleDeleteTodo(id)
  }

  return (
    <div>
      <TodoWrapper>
        <Text>{text}</Text>
        <DeleteButton onClick={handleClick}>
          <RiDeleteBinLine />
        </DeleteButton>
      </TodoWrapper>
    </div>
  );
};
