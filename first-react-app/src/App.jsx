import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Random from './Random'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      hi
      <Random></Random>
    </>
  )
}

export default App
