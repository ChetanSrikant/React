
import 'bootstrap/dist/css/bootstrap.css';
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css"
import React from "react";

const App = () => {

  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"]

  return (
    <React.Fragment>
      <h1 className='food-heading'>Healthy Food</h1>

      <ErrorMessage items = {foodItems}/> 

      {/* <FoodItems ></FoodItems> */}

      <FoodItems items={foodItems}/>
      
    </React.Fragment>
  );
};

export default App;
