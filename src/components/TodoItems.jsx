import TodoItem from "./TodoItem";

function TodoItems({ todoItems, onDeleteData }) {
  return (
    <div className="container">
      {todoItems.map((item, index) => (
        <TodoItem
          key={item.name + item.dueDate + index}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteData={onDeleteData}
        />
      ))}
    </div>
  );
}

export default TodoItems;
