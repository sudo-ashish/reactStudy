import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [lenght, setLenght] = useState(5)
  const [isNumber, setNum] = useState(false)
  const [isChar, setChar] = useState(false)
  const [password, setPassword] = useState("")
 

  const randomPassGen = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(isNumber) str += "1234567890"
      if(isChar) str += "!@#$%^&()_"
      
      for(let i = 1; i <= str.lenght; i++){
        let charIndex = Math.floor(Math.random() * str.lenght + 1)

        pass = str.charAt(char)
      }
    },
    [lenght, isNumber, isChar, setPassword],
  )
  
  console.log(randomPassGen)
 
  return (
    <>
      <div id="passCard">
        {/* <input type="text" name="Password-input" value=""> */}
      </div>
   </>
  )
}

export default App
