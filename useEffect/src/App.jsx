import React,{useState} from 'react';
import {useEffect } from 'react';

const App = ()=>{

  const[num,setNum]=useState(0)
 
useEffect(function(){
  console.log("use effect is running...")
},[num])

  return ( 
    <div className="p-10"> 
        <button
        
        onClick={()=>{
          setNum(num+1)
          console.log(num)
        }}
              className="bg-green-200">Click Me</button>
    </div>
  )
}

export default App;