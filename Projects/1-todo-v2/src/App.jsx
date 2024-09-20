import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

const App = () => {

  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "20/09/2024",
    },
    {
      name: "Buy Something",
      dueDate: "20/09/2024",
    },
  ]

  return (
    <div>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems}></TodoItems>
        
        
      </center>
    </div>
  );
};

export default App;