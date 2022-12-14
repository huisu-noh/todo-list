import { useSetRecoilState, useRecoilValue } from 'recoil';
import { categoriesState, categoryState, IToDo, toDoState } from '../atoms';

function ToDo({ text, category, id }: IToDo) {
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
      <span>{text}</span>
      {category &&
        categories.map((category) => (
          <button name={category} onClick={onClick}>
            {category}
          </button>
        ))}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default ToDo;
