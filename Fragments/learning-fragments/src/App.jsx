import Container from './components/Container';
import 'bootstrap/dist/css/bootstrap.css';
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from './components/FoodInput';
import "./App.css"
import React from "react";

const App = () => {

  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];

  let textToShow = "Food Item Entered by user"

  const handleOnChange = (event) =>{
    console.log(event.target.value);
    textToShow = event.target.value;
  }

  return (
   <>
    <Container>
      <h1 className='food-heading'>Healthy Food</h1>
      
      <ErrorMessage items = {foodItems}/> 

      <FoodInput handleOnChange={handleOnChange}></FoodInput>

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
