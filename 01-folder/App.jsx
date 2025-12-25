import React from 'react'


const App = () => {

  const  getData = async ()=>{
  const response=await fetch('https://dummyjson.com/products/1')

  //here is the /1 if not shoe all the data of api

  const data =await response.json()
  // // console.log(response)
  // console.log(response.json())
  console.log(data)
  }
  return (
    <div className="p-20">
      <button
        onClick={getData}
        className=" border-2 px-4 rounded-xl  border-pink-200 py-2 ">
        Get Data</button>
    </div>
  )
}
export default App;