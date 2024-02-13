import React from 'react'
import { useEffect , useState } from 'react'
import { useLoaderData } from 'react-router-dom'


const Github = () => {
    const data = useLoaderData()

    // let [data,setData] = useState([]);

    // useEffect(()=>{
        
    //     fetch('https://api.github.com/users/Rajat6480')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         setData(data)
    //     })
    // },[])

  return (
    <div
    className='text-center text-3xl bg-orange-300 '>
        <img className='pt-7' src={data.avatar_url} alt="pr ofile pic" /><br/>
      GithubFollowers : {data.followers}
    </div>
  )
}

export default Github

export const githubInfoLoader = async() =>{
   const response = await fetch('https://api.github.com/users/Rajat6480')
   return response.json();
}