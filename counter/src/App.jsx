import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter <= 101)
      setCounter(counter++)
  }
  const removeValue = () => {
    if(counter > 0){
      setCounter(--counter)
    }
  }

  return (
    <>
    <h1>Counter value: {counter}</h1>
    <button onClick={addValue}>Add value</button>
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
