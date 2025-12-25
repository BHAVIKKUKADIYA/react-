// m-2 border-2 border-pink-500 p-2 rounded-lg

import React, { useState } from "react";

const App = () => {


  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([])

  const preventDe = (e) => {
    e.preventDefault();

    //here copytask id array of task first array of task i supper watch is empty so copytask 
    // is empty but after the push 
    //push copy task in push in the form of the objeect in one elemnet of array this
    //  one elements show in one card in we ahve to show
    const copyTask = [...task];
    copyTask.push({ title, details })

    setTask(copyTask);;
    console.log(task)


   
    //aek step pachar chale console ma remember this
    //  console.log(title, details);  to display the title and details on console

    setTitle("");
    setDetails("");
  };


  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }
  //deletenote with idx const ...task splice (idx,1) settask copytask 
  //idx with call with functiona dn delete the node

  return (
    <div className="bg-black text-white flex   w-full">
      <form
        onSubmit={(e) => {
          preventDe(e);
        }}
        className="lg:p-20 p-8 border-2 border-green-200 rounded-lg lg:w-1/2 lg:h-screen  w-full flex flex-col"
      >
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="Write"
          className="p-2 m-2 border-2 border-pink-400 rounded-lg  w-[86%] "
        />
         
        <textarea
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          placeholder="enter the"
          name=""
          id=""
          className="m-2 border-2 h-30 border-pink-400 rounded-lg  w-[86%]"
        ></textarea>

        <button className="p-2 m-2 bg-white text-black border-pink-600  rounded-lg  flex justify-center w-[86%]">
          Add Notes
        </button>
      </form>

      <div className="gap-5 p-8  lg:w-1/2 w-full h-screen   ">
        <h1 className="p-2 text-wl font-bold">Your Notes</h1>
        <div className="p-2 flex flex-wrap   gap-4">
          {/* <div className="h-40 w-30  m-2 rounded-2xl bg-white w-10 ">
           { task.map(function(){
              return ("bhavok")
            })}
                </div> */}
          {
            task.map(function (elem, idx) {
              return <div key={idx} className=" 
                   bg-[url('https://static.vecteezy.com/system/resources/previews/024/584/422/original/brown-sticky-note-with-paper-clip-png.png')]
                      bg-cover bg-center w-40 h-52 
                     flex-col p-2 py-5 h-50  w-40 bg-white text-black rounded-2xl overflow-hidden ">

                <h2 className="text-pink-900 p-2 font-bold text-xl leading-tight">{elem.title}</h2>
                <p className="text-blue-800 p-2 mt-0">{elem.details}</p>
                <button onClick={() => {
                  deleteNote(idx)
                }}
                  className=" bg-red-800 b-3 flex relative y- mx-[15%] px-[15%] w-[70%] rounded font-bold text-white">DELETE</button>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}
export default App;
