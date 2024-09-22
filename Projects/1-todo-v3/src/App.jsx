import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

const App = () => {

  const initialtodoItems = [
    {
      name: "Buy Milk",
      dueDate: "20/09/2024",
    },
    {
      name: "Buy Something",
      dueDate: "20/09/2024",
    },
  ]

  const [todoItems, setTodoItems] = useState(initialtodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(itemName , itemDueDate)
    const newTodoItems = [...todoItems, {
      name: itemName,
      dueDate: itemDueDate,
    }]
    setTodoItems(newTodoItems)
  }

  const handleDeleteItem = (todoItemName) =>{
    console.log(todoItemName)
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName)
    setTodoItems(newTodoItems);
  }

  return (
    <div>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem = {handleNewItem}/>
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems todoItems={todoItems} onDeleteClick = {handleDeleteItem}></TodoItems>
        
        
      </center>
    </div>
  );
};

export default App;