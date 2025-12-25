import React from 'react';

// const [title,setTitle] =useState('')

// const submitHandler = (e) => {
//   e.preventDefault(e)
// }


const FromHand = () => {
  return (
    <div >
         <form 
                  
               className = 'p-10' >
               <input 
                       className='m-2 border-2 border-pink-500 p-2 rounded-lg ' 
                       type="text" placeholder='enter your name'/>
               <button 
                         className='bg-green-300 rounded '>Submit</button>
         </form>
    </div>
  );
};

export default FromHand;


    // <input className='m-2 border-2 border-pink-500 p-2 rounded-lg '   type="text" placeholder='enter your name'/>
    //     <button className='bg-green-300 rounded '>Submit</button>