import { useState } from 'react'
import './App.css'
import UsercontextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <UsercontextProvider>
      <h1>Hello Vite + React!</h1>
      <Login/>
      <Profile/>
    </UsercontextProvider>
  )
}

export default App
