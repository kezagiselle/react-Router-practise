import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import ShowHome from './ShowHome'

function Home() {
  return (
    <div className="bg-black min-h-screen">
      <div className="text-xl flex justify-end gap-10 mr-55 mt-20 font-semibold text-red-700">
        <NavLink to='/home' className="hover:text-red-900 transform hover:scale-130 transition duration-300">Home</NavLink>
        <NavLink to='/about' className="hover:text-red-900 transform hover:scale-130 transition duration-300">About</NavLink>
        <NavLink to='/movies' className="hover:text-red-900 transform hover:scale-130 transition duration-300">Movies</NavLink>
        <NavLink to='/contact' className="hover:text-red-900 transform hover:scale-130 transition duration-300">Contact Us</NavLink>
      </div>

      <Outlet />

      <ShowHome />
    </div>
  )
}

export default Home
