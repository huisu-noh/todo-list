import { Helmet } from 'react-helmet';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { toDoSelector } from '../atoms';
import CreateCategory from './CreateCategory';
import CreateToDo from './CreateToDo';
import SelectCategory from './SelectCategory';
import ToDo from './ToDo';

const Container = styled.div`
  max-width: 700px;
  margin: 20px auto;
`;

const CateBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);

  return (
    <Container>
      <Helmet>
        <title>To Do List</title>
      </Helmet>
      <h1>To Do List</h1>
      <hr />
      <CateBox>
        <SelectCategory />
        <CreateCategory />
      </CateBox>
      <hr />
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Container>
  );
}

export default ToDoList;
