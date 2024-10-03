import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Components/Navbar';
import './App.css';
import { decrement, increment } from './redux/counter/counterSlice';

function App() {
  const dispatch = useDispatch();
  
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <Navbar count={count}></Navbar>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        currently count is {count}
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </>
  );
}

export default App;
