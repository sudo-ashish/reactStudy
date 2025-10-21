import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Style.css'
import Cust from './Cust.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Cust />
    // <h1>Hello World</h1>
  )
}

export default App
