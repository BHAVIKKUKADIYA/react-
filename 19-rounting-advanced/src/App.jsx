import React from 'react'
import { Link ,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Navbar2 from './components/Navbar2.jsx'
import Footer from './components/Footer.jsx'
import NotFound from './pages/NotFound.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import Man from './pages/Man.jsx'
import Woman from './pages/Woman.jsx'
import Kids from './pages/Kids.jsx'
import Course from './pages/Course.jsx'
import CourseDetails from './pages/CourseDetail.jsx'

function App() {
  return (

      <div className="bg">
       <Navbar/>
       <Navbar2/>
        <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/About' element={<About/>}/>
             <Route path='/Product' element={<Product/>}>
               <Route path='Man' element={<Man/>}/>
               <Route path='Woman' element={<Woman/>}/>
               <Route path='kids' element={<Kids/>}/>
             </Route>
               <Route path='/Course' element={<Course />} /> 
               <Route path='/Course/:id' element={<CourseDetails />} />
              <Route path='*' element={<NotFound/>}/>
         </Routes>
       <Footer/>
      </div>
 
  )
}

export default App
