import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const LOCAL_STORAGE_KEY = "todoItems";

  // ✅ Load from localStorage directly in useState
  const [todoItems, setTodoItems] = useState(() => {
    const storedItems = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedItems ? JSON.parse(storedItems) : [];
  });

  // ✅ Save to localStorage on todoItems change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoItems));
  }, [todoItems]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItem = { name: itemName, dueDate: itemDueDate };
    setTodoItems((prevItems) => [...prevItems, newTodoItem]);
  };

  const deleteData = (itemName, itemDueDate) => {
    const updatedItems = todoItems.filter(
      (item) => !(item.name === itemName && item.dueDate === itemDueDate)
    );
    setTodoItems(updatedItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <br />
      <TodoItems todoItems={todoItems} onDeleteData={deleteData} />
    </center>
  );
}

export default App;
