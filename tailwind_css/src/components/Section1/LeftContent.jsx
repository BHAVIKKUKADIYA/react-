import React from 'react';
import Arrow from './Arrow';
import Herotext from './Herotext';

const LeftContent = () => {
    return (

            <div className="min-h-full  w-1/3  justify-between  flex ">
                   <Herotext/>
                   <Arrow/>
            </div>

    )
}
export default LeftContent;