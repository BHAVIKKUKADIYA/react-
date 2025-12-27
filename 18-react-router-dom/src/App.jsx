import React from 'react'
// 👇 1. IMPORT THIS LINE
import { Routes, Route,Link } from 'react-router-dom';

// import Aaaa from './pages/Home.jsx'
{/* <Route path='/' element={<Aaaa/>}/> */}// we cna give any name

import Home from './pages/Home.jsx'
import Aboutus from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <div className="text-sm ">
      
      <div className="cursor-pointer flex fixed inset-0 h-10
       bg-emerald-900 flex items-center text-emerald-100 p-6 justify-between">
      <h3>Sheriyans</h3>
        <div className=" flex gap-8">
          <Link to='/'>Home</Link>
          <Link to='About'>About</Link>
          <Link to='Contact'>Contact</Link>
        </div>

      </div>

      {/* Now React knows what 'Routes' is */}
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/Contact' element={<Contact/>}  />
      </Routes>
    </div>
  )
}

export default App