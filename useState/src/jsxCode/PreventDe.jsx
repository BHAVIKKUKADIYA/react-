import React,{useState} from 'react';

// const [title,setTitle] =useState('')


const PreventDe = () => {
  const [title,setTitle]=useState('')
  const preventHand =(e)=>{
    e.preventDefault()
    console.log("hillo sir ji",title)
    setTitle('')
    //  const setTitle(10);
  }
  return (
    <div >
         <form 
              onSubmit={(e)=>{preventHand(e)}}  
               className = 'p-10' >
               <input  onChange= {(e)=>{
              
                setTitle(e.target.value);
               }}       
                   value={title}
                       className='m-2 border-2 border-pink-500 p-2 rounded-lg ' 
                       type="text" placeholder='enter your name'/>
               <button 
                         className='bg-green-300 rounded '>Submit</button>
         </form>
    </div>
  );
};

export default PreventDe;

//div from input buttton button onclick from preventHAndler

    // <input className='m-2 border-2 border-pink-500 p-2 rounded-lg '   type="text" placeholder='enter your name'/>
    //     <button className='bg-green-300 rounded '>Submit</button>