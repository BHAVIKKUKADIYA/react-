import React from "react";

function App() {


  // function mouseEnter(){
  //   console.log("mouse entered");
  // }

  // function mouseClick(){
  //    console.log("mouse click");

  return (
    <>


   <div>
      <input onChange={(elem)=>{
        console.log(elem.target.value)
      }} type='text' placeholder="Enter Name"/>
   </div>
    </>
  );
}

export default App;
