import React from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

// 1. Fixed the name here to match the export below
const Page1Content = (props) => {
   
    return (
            <div className="flex h-[90%] w-full ">
                <LeftContent  />
                <RightContent users={props.users}/>
            </div>
    )
}

// 3. This export name must match the const name above
export default Page1Content;