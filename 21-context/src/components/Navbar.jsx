// import Nav2 from './Nav2'
// import useContext from 'react'
// import ThemeDataContext from '../context/ThemeContext'

// function Navbar() {

//     return (

//             <div className="navbar" >
//                 <h4>Bhavik</h4>  {/* {children} */}
//                 <Nav2/>
//             </div>

//     )
// }

// export default Navbar
import { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {

    const [theme] = useContext(ThemeDataContext)
    return (
        <div className={theme}>
            <h2>Sheryians</h2>
            <Nav2 />
        </div>
    )
}

export default Navbar