import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoState } from '../atoms';
import { AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';

const Input = styled.input`
  width: 500px;
  height: 50px;
  margin-right: 5px;
  padding: 15px;
  font-size: 20px;
  border: none;
  border-radius: 15px;
  ::placeholder {
    font-size: 20px;
    padding: 10px;
  }
`;

const Button = styled.button`
  border: none;
  font-size: 20px;
`;

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue('toDo', '');
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <Input
        {...register('toDo', {
          required: 'Please write a To Do',
        })}
        placeholder={`Write a to do in the ${category} category.`}
      />
      <Button>
        <AiOutlinePlus />
      </Button>
    </form>
  );
}

export default CreateToDo;
