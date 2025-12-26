import React from 'react';
import axios from 'axios';

const App =()=>{
  
const getData=async ()=>{

    const response =await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20');
    console.log(response.data)
}

    return(
        <div>
            <button onClick={getData}
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Click Me</button>
        </div>
    )
}
export default App;