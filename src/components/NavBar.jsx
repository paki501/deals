import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
    <nav className="bg-teal-400 py-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">

        {/* Left Links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-white font-medium items-center">
          <Link to="/" className="hover:text-neutral-200">Deals</Link>
          <Link to="/lastminute" className="hover:text-neutral-200">Last Mins Booking</Link>
          <Link to="/reviews" className="hover:text-neutral-200">Reviews</Link>
          <Link to="/contact" className="hover:text-neutral-200">Contact</Link>
        </div>

        {/* Logo */}
        <img 
          src="logo.svg" 
          alt="Logo"
          className="h-14 my-3 md:my-0"
        />

        {/* Admin Profile */}
        <div className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded-full shadow-sm mt-2 md:mt-0">
          <img src="male.svg" alt="user" className="h-8 w-8" />
          <p className="text-sm leading-4">
            Mehrab Ansari <br/><span className="text-gray-500 text-xs">Admin</span>
          </p>
        </div>

      </div>
    </nav>
    </>
  )
}
