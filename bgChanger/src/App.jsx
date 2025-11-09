import { useState } from 'react'

function App() {
  const [color, setColor] = useState("rgb(36,36,36)")
  return (
      <div 
      className=' w-full h-screen'
      style= {{backgroundColor: color}}
      >
        <div 
        id='changeBar'
        className='fixed flex flex-wrap justify-center bottom-12 left-1/2 -translate-x-1/2 px-2 py-3 bg-amber-100 rounded-2xl'
        >

        <button 
        onClick={() => {setColor("red")}} 
        className=' px-6 py-2 mx-4 min-w-30 border-2 border-s-orange-950 rounded-2xl bg-red-600 '
        >Red</button>
        <button 
        onClick={() => {setColor("green")}} 
        className=' px-6 py-2 mx-4 min-w-30 border-2 border-s-orange-950 rounded-2xl bg-green-600 '
        >Green</button>
        <button 
        onClick={() => {setColor("blue")}} 
        className=' px-6 py-2 mx-4 min-w-30 border-2 border-s-orange-950 rounded-2xl bg-blue-600 '
        >Blue</button>
        <button 
        onClick={() => {setColor("#7B7C01")}} 
        className=' px-6 py-2 mx-4 min-w-30 border-2 border-s-orange-950 rounded-2xl bg-[#7B7C01] '
        >Olive</button>
        <button 
        onClick={() => {setColor("gray")}} 
        className=' px-6 py-2 mx-4 min-w-30 border-2 border-s-orange-950 rounded-2xl bg-gray-600 '
        >Gray</button>
        <button 
        onClick={() => {setColor("yellow")}} 
        className=' px-6 py-2 mx-4 min-w-30 border-2 border-s-orange-950 rounded-2xl bg-yellow-600 '
        >Yellow</button>
        <button 
        onClick={() => {setColor("pink")}} 
        className=' px-6 py-2 mx-4 min-w-30 border-2 border-s-orange-950 rounded-2xl bg-pink-600 '
        >Pink</button>
        <button 
        onClick={() => {setColor("purple")}} 
        className=' px-6 py-2 mx-4 min-w-30 border-2 border-s-orange-950 rounded-2xl bg-purple-600 '
        >Purple</button>
        <button 
        onClick={() => {setColor("#E3E4F4")}} 
        className=' px-6 py-2 mx-4 min-w-30 border-2 border-s-orange-950 rounded-2xl bg-[#E3E4F4] '
        >Lavender</button>
        <button 
        onClick={() => {setColor("#FFFFFF")}} 
        className=' px-6 py-2 mx-4 min-w-30 border-2 border-s-orange-950 rounded-2xl bg-[#FFFFFF] '
          >White</button>
          
        </div>       
      </div>
  )
}

export default App
