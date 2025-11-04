import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
    <nav className='bg-teal-400 py-6 '>
        <div className='text-neutral-50 flex flex-between'>
            <Link to="/" className='px-4 font-medium ml-20'>Deals</Link>
            <Link to="/lastminute" className='px-4'>Last Mins Booking</Link>
            <Link to="/reviews" className='px-4'>Reviews</Link>
            <Link to="/contact" className='px-4'>Contact</Link>
           
             <img src="logo.svg" alt="" className='-mb-6 -mt-4 h-14 flex items-center ml-50'/>
             <div className='px-10 py-1 bg-neutral-500 flex ml-160 rounded-4xl -mt-2 -mb-2 mr-10'>
                <img src="male.svg" alt=""  className='flex justify-items-start -ml-4'/>
                <p className='text-black ml-10 '>Mehrab Ansari <br/> Admin</p>
                <h1>suifjsoifj</h1>

             </div>

            
        </div>

    </nav>

   
    
    
    
    
    </>
  )
}
