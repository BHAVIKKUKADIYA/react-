import React from 'react';

const Rightcardcontent = (props) => {
    return (
       
          <div className="absolute flex p-6 w-full h-full left-0 right-0 ">
                <h3 className="bg-white h-7 w-7 rounded-full flex font-semibold justify-center content-center">{props.id + 1}</h3>
                <p className="w-[90%] absolute bottom-25 text-white leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure accusamus cupiditate voluptatibus mollitia alias tempora.  </p>
                <div className="absolute bottom-10 flex justify-between">
                    <button   style={{backgroundColor:props.color}}  className="  text-white font-medium px-8 py-1 rounded-full">{props.tag }</button>
                    <button className=" text-white bg-blue-900  font-medium px-3 py-2 rounded-full">😉</button>
                </div>

            </div>
    )
}


export default Rightcardcontent;