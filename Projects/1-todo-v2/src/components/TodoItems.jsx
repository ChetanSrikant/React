import React from 'react';
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css"

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map(item => (
        <TodoItem 
          key={item.name}  // Assuming each item has a unique 'id'
          todoDate={item.dueDate} 
          todoName={item.name} 
        />
      ))}
    </div>
  );
}

export default TodoItems;
