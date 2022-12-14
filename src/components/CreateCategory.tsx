import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { categoriesState } from '../atoms';
import { AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';

const Form = styled.form``;

const Input = styled.input`
  height: 40px;
  border: none;
  border-radius: 15px;
  padding: 10px;
`;

const Button = styled.button`
  border: none;
  font-size: 20px;
`;

interface IForm {
  newCategory: string;
}

function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [categories, setCategories] = useRecoilState(categoriesState);
  const handleValid = ({ newCategory }: IForm) => {
    if (newCategory) {
      if (categories.includes(newCategory)) {
        alert('I already have the same category.');
        return;
      }
    }
    const newCategoies = [...categories, newCategory];
    setCategories(newCategoies);
    setValue('newCategory', '');
  };

  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <Input
        {...register('newCategory', {
          required: 'Please write a category',
        })}
        placeholder='Write a new category'
      />
      <Button>
        <AiOutlinePlus />
      </Button>
    </Form>
  );
}

export default CreateCategory;
