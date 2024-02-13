import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, RouterProvider , Route} from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import User from './Components/User/User'
import Github from './Components/Github/Github'
import { githubInfoLoader } from './Components/Github/Github'
// const router = createBrowserRouter([
//   {path:'/',
// element:<Layout/>,
// children:[
//   {
//     path:"",
//     element:<Home/>
//   },
//   {
//     path:'about',
//     element:<About/>
//   },
//   {
//     path:'contact',
//     element:<Contact/>
//   }
// ]}

// ]) 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User/>} />
      <Route
      loader={githubInfoLoader} 
      path='github' element={<Github/>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
) 
