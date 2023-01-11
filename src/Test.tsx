import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function Test() {
  const onDragEnd = () => {};
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
          <Droppable droppableId="one">
            {() => (
              <ul>
                <Draggable draggableId="first" index={0}>
                  {() => <li>one</li>}
                </Draggable>
                <Draggable draggableId="second" index={1}>
                  {() => <li>two</li>}
                </Draggable>
              </ul>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
}

export default Test;
