import React, { useState } from 'react'

function Counter() {

  // var a=20;
  const [first, setFirst] = useState(0)


  // function changeA(){
  //    console.log({a})
  //   a++
  //   console.log({a})
  // }

  function update() {
    setFirst(first + 1)
  }
  // function updatedd(){
  //  setFirst(first-1)
  // }
  const update5 = () => {
    setFirst(first + 5)
  }
  const updatedd = () => {
    setFirst(first - 1)
  }
  return (

    <div className="bg-pink-100 text-black  bg-pink-200 h-90 w-80  m-20 rounded-2xl">
      <h1 className=" py-8 text-6xl  flex justify-center px-26  h-20 w-20 mx-14 my-10"> {first}</h1>

      <div className="flex justify-center">
        <button className="btn bg-blue-400 px-7 py-2 rounded-xl my-10 m-2" onClick={update}>inc</button>
        <button className="btn bg-blue-400 px-7 py-2 rounded-xl my-10 m-2" onClick={updatedd}>dec</button>
        <button className="btn bg-blue-400 px-7 py-2 rounded-xl my-10 m-2" onClick={update5}>inc5</button>
      </div>
      <h2 className="p-7"> -- this is a counter thsi a help of useState</h2>

    </div>

  )
}

export default Counter
