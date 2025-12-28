import React from 'react'
import Nav2 from './Nav2'

function Navbar({children,theme}) {
    console.log(children);

    return (
        <div className="navbar">
            <h4>Bhavik</h4>
            {children}
            <Nav2 theme={theme}/>
        </div>
    )
}

export default Navbar
