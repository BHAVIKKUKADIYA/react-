import React from 'react';
import Rightcard from './Rightcard';

const RightContent = (props) => {
    console.log(props.users);
    return (
        
        
        <div id="right" className="w-full h-full overflow-x-auto   flex flex-nowrap p-6 " >
         {props.users.map(function(elem,idx){
                
            return <Rightcard key={idx} id={idx}  colors ={props.colors} img={elem.img} tag={elem.tag} intro={elem.intro} />
         })}
       

    </div>
    )
}
export default RightContent;