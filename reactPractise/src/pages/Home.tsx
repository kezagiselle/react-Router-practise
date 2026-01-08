import React from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div>
       <Header />

       <div className="text-2xl flex justify-end gap-10 mr-80 mt-5 font-semibold ">
       <NavLink to='/about' className=" hover:text-green-600 transform hover:scale-130 transition duration-300">About</NavLink>
       <NavLink to='/posts' className=" hover:text-green-600 transform hover:scale-130 transition duration-300">Posts</NavLink>
       <NavLink to='/contact' className="hover:text-green-600 transform hover:scale-130 transition duration-300">Contact</NavLink>
       </div>
    
    </div>
  )
}

export default Home
