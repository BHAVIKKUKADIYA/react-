import React from 'react';
import Navbar from './Navbar';  //aej folder ma hoi to ./Navbar direct karvanu baki not sppoerted
import Page1Content from './Page1Content';  

const Section1 = (props) => {
//   console.log(props.users);

    return (
            <div className="h-screen w-full">
                <Navbar />
                <Page1Content users={props.users} />
            </div>
    )
}
export default Section1;