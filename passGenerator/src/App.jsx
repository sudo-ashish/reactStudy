import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [lenght, setLenght] = useState(5)
  const [isNumber, setNum] = useState(false)
  const [isChar, setChar] = useState(false)
  const [password, setPassword] = useState("")
 

  const randomPassGen = useCallback(
    () => {
      first
    },
    [second],
  )
  
 
  return (
    <>
      <div id="passCard">
        <input type="text" name="Password-input" value="">
      </div>
   </>
  )
}

export default App
