import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

import React from "react";

const App = () => {

  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"]

  let emptyMessage = foodItems.length == 0 ? <h3> I am still hungry </h3>: null

  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      {emptyMessage}
      <ul className="list-group">        
        {foodItems.map((item)=>(
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default App;
