import React from 'react'
import Man from './Man.jsx'
import Woman from './Woman.jsx'
import Kids from './Kids.jsx'
import {Link, Outlet } from 'react-router-dom'
function Product() {
  return (
    <div>
            <div className='flex justify-center font-semibold gap-10 py-4'>
                <Link className='text-xl ' to='/Product/Man'>Men</Link>
                <Link className='text-xl ' to='/Product/Woman'>Women</Link>
                <Link className='text-xl ' to='/Product/Kids'>Kids</Link>
            </div>
            <Outlet />
        </div>    
  )
}
export default Product


