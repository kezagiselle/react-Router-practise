import React from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div>
       <Header />

       <div className="text-2xl flex justify-end gap-5 mr-50">
       <NavLink to='/about'>About</NavLink>
       <NavLink to='/contact'>Contact</NavLink>
       </div>
    
    </div>
  )
}

export default Home
