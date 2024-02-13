import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 
      inset-x-0 px-2 ' >
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3  rounded-full' >
        <button className='py-1 px-3 text-white shadow-xl rounded-full'
        style={{backgroundColor:"red"}}
        onClick={()=>setColor('red')} >Red</button>
        <button className='py-1 px-3 text-white shadow-xl rounded-full'
        style={{backgroundColor:"green"}}
        onClick={()=>setColor('green')} >Green</button>
        <button className='py-1 px-3 text-white shadow-xl rounded-full'
        style={{backgroundColor:"blue"}}
        onClick={()=>setColor('blue')} >Blue</button>
        <button className='py-1 px-3 text-white shadow-xl rounded-full'
        style={{backgroundColor:"orange"}}
        onClick={()=>setColor('orange')} >Orange</button>
      </div>
      </div>
      </div> 
    </>
  )
}

export default App
