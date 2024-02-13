import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    
  return (
    <div className='text-center text-3xl m-3 p-3 bg-gray-500 text-white' >
    User  :{useParams().userid}
    </div>
  )
}

export default User
