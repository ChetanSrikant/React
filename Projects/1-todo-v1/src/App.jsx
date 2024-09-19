import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";

const App = () => {
  return (
    <div>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItem1 />
        <TodoItem2 />
      </center>
    </div>
  );
};

export default App;
