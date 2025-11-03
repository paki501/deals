import React from 'react'
import NavBar from './NavBar'


export default function Contact() {
  return (
    <>
    <NavBar/>
    {/* <div className='h-[630px] w-[1572px] absolute top-[179px] left-[119px] rounded-[25px] bg-[rgba(232,250,249,1)]'>
        <h2 className='flex justify-center font-bold text-2xl mt-20'>Contact us</h2>
        <p className='flex justify-center'>Feel free to contact us and we will get back to you as soon as we can</p>
        <div className='flex flex-row '>
            Clinic name<br/>
            <input type='name' className='bg-neutral-50 rounded-3xl py-4 px-10'></input>
            Email
            <input type="email"></input>
        </div>

    </div> */}

    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-cyan-100 bg-opacity-50 p-6 rounded-2xl shadow-md w-full max-w-4xl border border-blue-300">
        <h2 className="text-2xl font-bold text-center text-black">Contact Us</h2>
        <p className="text-center text-gray-600 mt-2 mb-4">
          Feel free to contact us and we will get back to you as soon as we can.
        </p>

        <hr className="mb-6 border-gray-200" />

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Clinic Name</label>
              <input
                type="text"
                placeholder="Enter clinic name"
                className="w-full px-4 py-3 rounded-full bg-neutral-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-full bg-neutral-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              placeholder="Enter text here......"
              rows={6}
              className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-white font-semibold rounded-full transition"
            >
              SUBMIT NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  
   
  

    
    
    
    
    
    
    
    
    </>
  )
}
