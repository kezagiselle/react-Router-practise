import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="text-2xl flex justify-end gap-10 mr-80 mt-5 font-semibold text-red-700">
        <NavLink to='/home' className="hover:text-red-900 transform hover:scale-130 transition duration-300">Home</NavLink>
        <NavLink to='/about' className="hover:text-red-900 transform hover:scale-130 transition duration-300">About</NavLink>
        <NavLink to='/movies' className="hover:text-red-900 transform hover:scale-130 transition duration-300">Movies</NavLink>
        <NavLink to='/contact' className="hover:text-red-900 transform hover:scale-130 transition duration-300">Contact Us</NavLink>
      </div>
    </div>
  )
}

export default Home
