import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
 let newArr = [1,2,3,4]

  return (
    <>
    <h1 className='bg-green-400 p-4 text-black rounded-xl mb-4' >Rajat and Tailwind</h1>
    <Card  myArr={newArr} userName = "Rajat" btnOptn="Github"/>
    <Card userName = "Rahul" />
    </>
  )
}

export default App
