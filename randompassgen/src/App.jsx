import { useCallback, useEffect, useRef } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [characterAllowed , setCharacterAllowed] = useState(false)
  const [password , setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)
const copyPasswordToclipBoard = useCallback(()=>{
  passwordRef.current?.select()
  // passwordRef.current?.setSelectionRange(0,3)
  window.navigator.clipboard.writeText(password)
},[password])
const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) {str += "1234567890"};
    if(characterAllowed) {str += "`!@#$%^&*()_+-={}[]<>"};

    for(let i = 1 ; i <= length ; i++)
    {
      let char = Math.floor(Math.random()* str . length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass)
  },
  [length,numberAllowed,characterAllowed,setPassword]);

  useEffect(() => {passwordGenerator()},
  [length,passwordGenerator,numberAllowed,characterAllowed]);
  return (
    <>
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-white  bg-gray-700'>
        <h1>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 p-2' >
        <input 
        type="text" 
        value={password}

        placeholder='Password'
        className='shadow w-full mb-3 outline-none p-2 rounded-xl text-orange-600'
         readOnly
         ref={passwordRef}/>
        <button onClick={copyPasswordToclipBoard} className='bg-blue-700 pb-4 mb-3 p-2 rounded-xl  shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=> {setLength(e.target.value);}} />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{setNumberAllowed( (prev)=> !prev )}}/>
            <label htmlFor="inputNumber">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={characterAllowed}
            id="characterInput"
            onChange={()=>{setCharacterAllowed( (prev)=>!prev )}}/>
            <label htmlFor="inputCharacter">Character</label>
          </div>
        </div>
      </div>
        
    </>
  )
}

export default App
