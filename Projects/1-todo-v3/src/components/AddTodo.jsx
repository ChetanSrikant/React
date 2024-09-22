import React from 'react'
import { useState } from 'react';

const AddTodo = ({onNewItem}) => {

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event)=> {
    setTodoName(event.target.value)
  }

  const handleDateChange = (event)=> {
    setDueDate(event.target.value)
  }

  const handleAddButtonClicked = (event)=>{
    onNewItem(todoName, dueDate)
    setDueDate("");
    setTodoName("");
  }
  

  return (
    <div>      
      <div className="row kg-row">
          <div className="col-6">
            <input type="text" name="" id="" placeholder="Enter Todo" value={todoName} onChange={handleNameChange}/>
          </div>
            <div className="col-4">
              <input type="date" value={dueDate} onChange={handleDateChange}/>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-success kg-button"
              onClick={handleAddButtonClicked}>Add</button>
            </div>
          </div>
    </div>
  )

}


export default AddTodo
