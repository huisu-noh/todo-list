import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { categoriesState, categoryState } from '../atoms';

const Select = styled.select`
  margin: auto 0;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 15px;
`;

function SelectCategory() {
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  const categories = useRecoilValue(categoriesState);
  return (
    <>
      <Select value={category} onInput={onInput}>
        {categories?.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
    </>
  );
}

export default SelectCategory;
