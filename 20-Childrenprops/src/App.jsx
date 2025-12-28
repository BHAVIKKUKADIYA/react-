import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Nav2 from './components/Nav2.jsx'
function App() {
  const [theme, setTheme] = useState("Dark")

  return (
       <div>

     <Navbar theme={theme}>
      <h2>This is  navbar</h2>
      <h2>mad aby childernZ</h2>
        </Navbar>

       </div>
  )
}

export default App
