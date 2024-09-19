import React from 'react'

const TodoItem2 = () => {
    let todoName = "Go to Clg"
    let todoDate = "19/09/2024"
  return (
    <div>
      <div class="row kg-row">
          <div class="col-6">
            {todoName}
          </div>
            <div class="col-4">
              {todoDate}
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-danger kg-button">Delete</button>
            </div>
          </div>
    </div>
  )
}

export default TodoItem2
