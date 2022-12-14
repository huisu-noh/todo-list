import { useSetRecoilState, useRecoilValue } from 'recoil';
import { categoriesState, IToDo, toDoState } from '../atoms';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 8px;
  font-size: 13px;
`;

const Span = styled.span`
  font-size: 35px;
`;

function ToDo({ text, category, id }: IToDo): JSX.Element {
  const setToDos = useSetRecoilState(toDoState);
  const categories = useRecoilValue(categoriesState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      const front = oldToDos.slice(0, targetIndex);
      const back = oldToDos.slice(targetIndex + 1);
      const newToDos = [...front, newToDo, ...back];
      return newToDos;
    });
  };
  const onDelete = () => {
    setToDos((oldToDos) => {
      return oldToDos.filter((toDo) => toDo.id !== id);
    });
  };

  console.log(typeof categories);
  console.log(categories);

  return (
    <li>
      <Span>{text}</Span>
      {category &&
        categories.map((category) => (
          <Button name={category} onClick={onClick}>
            {category}
          </Button>
        ))}
      <Button onClick={onDelete}>
        <RiDeleteBin5Fill />
      </Button>
    </li>
  );
}

export default ToDo;
