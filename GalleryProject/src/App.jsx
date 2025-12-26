import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/photos?offset=${page}&limit=10`
    );
    //useEffcet ma pan page devu pade baki change nai thai kem ke tya thij chaneg thai
    // console.log(response.data.photos);
    setUserData(response.data.photos);
  };

  useEffect(function () {
    getData();
  }, [page]);

  let printUserData = (
    <h1 className="bg-black text-grey-300 text-xs absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 ">
      Loading....
    </h1>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <div className="h-40 w-48 bg-white shadow-lg overflow-hidden m-2 rounded-md shrink-0">
            <img
              className=" object-cover h-full  g-10"
              src={elem.url}
              alt="photo"
            />
          </div>
          <h2 className="font-bold w-48 overflow-hidden m-2 shrink-0">
            {elem.title}
          </h2>
        </div>
      );
      // also we can create this for the card component return
    });
  }

  return (

    <div className="bg-black  overflow-auto h-screen text-white  p-4">
      {/* <button
        onClick={getData}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 m-15 rounded"
      >
        Click Me
      </button> */}
      
      {/* aani upper button ni getData beacuse automatically call by the useEffect */}
      
      {/* aapde flex wrap aaya devu pade wrap karva kem kw print ot aaythij thai chene   */}
      <h1 className=" p-1 fixed text-5xl bg-red-500 ">{page}</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {printUserData}      
      </div>


      <div className="flex justify-center m-4">
        <button
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
              console.log(page);
            }
          }}
          className="bg-amber-500  text-sm cursor-pointer active:scale-95 font-bold py-2 px-6 m-3 rounded"
        >
          Prev
        </button>

        <h3 className="flex justify-center align-middle py-4 px-2">
          page {page}
        </h3>

        <button
          onClick={() => {
            setPage(page + 1);
            console.log(page);
          }}
          className="bg-amber-500  text-sm cursor-pointer active:scale-95 font-bold py-2 px-6 m-3 rounded"
        >
          Next
        </button>
      </div>
      

    </div>
  );
};

export default App;