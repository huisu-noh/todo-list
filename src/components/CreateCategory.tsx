import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { categoriesState } from '../atoms';

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
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register('newCategory', {
          required: 'Please write a category',
        })}
        placeholder='Write a new category'
      />
      <button>Add</button>
    </form>
  );
}

export default CreateCategory;
