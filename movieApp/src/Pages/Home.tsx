import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import ShowHome from './ShowHome'
import { FaSearch } from "react-icons/fa";


function Home() {
  return (
    <div className="bg-black min-h-screen">
      <div className="text-xl flex justify-end gap-10 mr-55 mt-20 font-semibold text-red-700">
        <NavLink to='/' className="hover:text-red-900 transform hover:scale-130 transition duration-300">Home</NavLink>
        <NavLink to='/about' className="hover:text-red-900 transform hover:scale-130 transition duration-300">About</NavLink>
        <NavLink to='/movies' className="hover:text-red-900 transform hover:scale-130 transition duration-300">Movies</NavLink>
        <NavLink to='/contact' className="hover:text-red-900 transform hover:scale-130 transition duration-300">Contact Us</NavLink>
      </div>
<div className="flex justify-center mt-6 mb-10">
  <div className="flex items-center w-1/3 md:w-1/4 bg-white rounded-lg overflow-hidden">
    
    <span className="px-3 text-gray-500">
      <FaSearch />
    </span>

    
    <input
      type="text"
      placeholder="Search movies..."
      className="flex-1 p-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-700 transition"
    />
  </div>
</div>

      <Outlet />
      <ShowHome />
    </div>
  )
}

export default Home
