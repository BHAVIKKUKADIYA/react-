import React from 'react';

const Navbar = () => {

  const arr = [{user:"bhavik",age:13},{user:"ravi"},{user:"nikhil"}];

  return (
    <div id="parent">
      {
        arr.map(function(elem){
          console.log(elem.age);
        })
      }
    </div>
  );
};

export default Navbar;
