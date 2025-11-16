import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [lenght, setLenght] = useState(5)
  const [isNumber, setNum] = useState(false)
  const [isChar, setChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)
  
  const randomPassGen = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      
      if(isNumber) str += "1234567890"
      if(isChar) str += "!@#$%^&()_"
      
      for(let i = 1; i <= lenght; i++){
        let charIndex = Math.floor(Math.random() * str.length + 1)
        
        pass += str.charAt(charIndex)
      }
      setPassword(pass)
    },
    [lenght, isNumber, isChar, setPassword],
  )
 
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },
  [password]
)

  useEffect(() => {
    randomPassGen()
  },
  [lenght, isNumber, isChar, setPassword]
  )

  return (
    <>
      <div 
      className='w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'
      >
        <h1 
        className='text-white text-center my-3'>Password generator
        </h1>
        <div 
        className='flex shadow rounded-lg overflow-hidden mb-4'
        >
          <input 
            type="text"
            value={password}
            className='bg-white outline-none w-full py-1 px-3'
            placeholder='Password'
            ref={passwordRef}
            />
          <button 
          className='bg-blue-600 text-[#FFFFFF] px-3'
          onClick={() => {copyToClipboard()}}
          >
            copy</button>
        </div>
        <div 
        className='flex text-sm gap-x-2'
        >
          <div
          className='flex item-center gap-x-2'
          >
            <input 
            type="range" 
            min={5}
            max={16}
            value={lenght}
            className='cursor-pointer'
            onChange={(e) => {setLenght(e.target.value)}}
            />
            <label>Length: {lenght}</label>

            <input 
            type="checkbox" 
            defaultChecked={isNumber}
            id='numPass'
            onChange={() => {
              setNum((prev) => !prev)
            }}
            />
            <label htmlFor="numPass">Numbers</label>

            <input 
            type="checkbox" 
            defaultChecked={isChar}
            id='charPass'
            onChange={() => {
              setChar((prev) => !prev)}
            }
            />
            <label htmlFor="charPass">Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
