import React from 'react'
import { Link ,Routes,Route} from 'react-router-dom'



function Navbar() {
  return (
      <div className="bg-stone-100  text-emerald-500 text-sm flex justify-between p-2 px-4">
       <h2>  Sheriyans</h2>
     <div className="flex gap-4">
        <Link to={'/'}> Home </Link>
        <Link to={'/Product'}> Product </Link>
        <Link to={'/About'}> About </Link>
        <Link to={'/Course'}> Course </Link>
     </div>

      </div>
  )
}
export default Navbar
