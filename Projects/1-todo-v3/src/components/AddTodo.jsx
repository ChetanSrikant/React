import React, { useRef } from "react";

const AddTodo = ({ onNewItem }) => {
  // Use useRef to get references to the input elements
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = () => {
    // Get the current value from the input fields
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    // Pass the values to the onNewItem function
    onNewItem(todoName, dueDate);

    // Clear the input fields
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <div>
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
