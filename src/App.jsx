import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LastMinute from './components/LastMinute'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/lastminute" element={<LastMinute/>}></Route>
      <Route path="/reviews" element={<Reviews/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
     </BrowserRouter>
     {/* <Home/> */}
    
    </>
  )
}

export default App
