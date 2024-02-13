import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;
  let [counter,setCounter] = useState(15)
  
  const addCounter = () =>{
    counter = counter + 1;
    if(counter > 20)
    {
      alert('Please stop')
      counter=0
    }
    console.log('setCounter '  ,counter)
    setCounter(counter);
  }

  const remCounter=()=>{
    counter = counter - 1;
    if(counter<0){
      counter=0;
    }
    setCounter(counter)
  }

  return (
    <>
     <h1>Rajat and React</h1>
     <h3>Counter value: {counter}</h3>
     <button onClick={addCounter} >Add value {counter}</button>
     <button onClick={remCounter}>Remove Value {counter}</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App
