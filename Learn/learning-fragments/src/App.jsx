import Container from './components/Container';
import 'bootstrap/dist/css/bootstrap.css';
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from './components/FoodInput';
import "./App.css"
import React, { useState } from "react";

const App = () => {

 
  const [foodItems, setFoodItems] = useState(["Green Vegetables", "Salad", "Milk"])

  const [textToShow, setTextToShow] = useState("Food Item Entered by user");

  const onKeyDown = (event) =>{
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
    setTextToShow(event.target.value);
  }

  return (
   <>
    <Container>
      <h1 className='food-heading'>Healthy Food</h1>
      
      <ErrorMessage items = {foodItems}/> 

      <FoodInput handleKeyDown={onKeyDown}></FoodInput>

      <p>{textToShow}</p>

      <FoodItems items={foodItems}/>
      
    </Container>

    {/* <Container>
      <p>This is the healthiest food available over here </p>
    </Container> */}
   </>
  );
};

export default App;
