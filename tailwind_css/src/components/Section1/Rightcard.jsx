import React from 'react';
import Rightcardcontent from './Rightcardcontent'
const Rightcard = (props) => {
    return (
        <div className="flex relative shrink-0  h-[84%] w-1/3  overflow-hidden rounded-xl  mx-5 my-8 flex">
            <img className="h-full shrink-0  object-cover  object-center  flex " src={props.img} alt="" />
        
            <Rightcardcontent id={props.id} intro={props.intro} colors ={props.colors} tag={props.tag}/>
        </div>
    )
}


export default Rightcard;