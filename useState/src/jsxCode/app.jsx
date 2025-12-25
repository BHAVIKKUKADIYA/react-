//array
//JSON.stringify
//      <h1 className="text-4xl">hello :: {JSON.stringify(num)}</h1>  displa y a objectt use this method otherwise warning or error generate


import React, { useState } from 'react';

const App = () => {
  // 1. State for the Array
  const [num, setnum] = useState([10, 20, 30]);
  
  // 2. State for the Input Box (to store what you type)
  const [val, setVal] = useState("");

  const ClickON = () => {
    // Copy the array
    const newArr = [...num];
    
    // Push the value from the input box (val)
    // We use Number(val) to convert string "50" to number 50
    newArr.push(Number(val));
    
    // Update the array state
    setnum(newArr);
    
    // Clear the input box after adding
    setVal("");
  };

  const ClickONN = () => {
    const newArr = [...num];
    newArr.pop();
    setnum(newArr);
  };

  return (
    <div className="m-10">
      <h1 className="text-4xl mb-5">Current Array:</h1>
      
      {/* Displaying array cleanly using join */}
      <h2 className="text-2xl text-blue-600 mb-5">
        [{num.join(", ")}]
      </h2>

      {/* INPUT BOX */}
      <input 
        type="number"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className="border p-2 rounded mr-2 text-black border-black"
        placeholder="Type number here..."
      />

      <button 
        onClick={ClickON} 
        className="bg-green-200 p-2 rounded-xl my-5 mr-4">
        Add Input
      </button>

      <button 
        onClick={ClickONN} 
        className="bg-red-200 p-2 rounded-xl my-5">
        Pop Item
      </button>
    </div>
  );
};

export default App;


//JSON.stringify
//      <h1 className="text-4xl">hello :: {JSON.stringify(num)}</h1>  displa y a objectt use this method otherwise warning or error generate
