import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../Context/UserContext'


const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    function handleOnclick(e){
        e.preventDefault()
        setUser({username,password})
    }


  return (
    <div>
      <h2>Login</h2>
      <input 
      type="text"
      placeholder='Username'
      value={username}
      onChange={e=> setUsername(e.target.value)}/><br />
      <input 
      type="password" 
      placeholder='Password'
      value={password}
      onChange={(e)=>setPassword(e.target.value)} /><br/>
      <button onClick={handleOnclick} >Submit</button><br/>

    </div>
  )
}

export default Login

