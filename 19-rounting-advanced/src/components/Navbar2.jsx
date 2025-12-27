import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar2() {
    let navigate = useNavigate()
    //use let so use in all progam
    return (
<div className="flex jsutify-center gap-4 p-3 bg-gray-200">
     <button onClick={  ()=>navigate('/') }
        className="bg-emerald-800 hover:bg-emerald-700 text-white text-sm py-2 px-4 rounded">
          Return to Home Page </button>

      <button onClick={  ()=>navigate(-1) }
        className="bg-emerald-800 hover:bg-emerald-700 text-white text-sm py-2 px-4 rounded">
        Back</button>

      <button onClick={  ()=>navigate(+1) }
        className="bg-emerald-800 hover:bg-emerald-700 text-white text-sm py-2 px-4 rounded">
        Next</button>
</div>
    )
}
export default Navbar2
