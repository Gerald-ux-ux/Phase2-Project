import React, { useState, useEffect } from "react";

function Nav() {
  const [buttons, setButtons] = useState([]);

  return (
    <>
      {/* <div className='buttons'>
      <button onClick={() => setButtons("")}>Start Time</button>
      <button onClick={() => setButtons("")}>End Time</button>
      <button onClick={() => setButtons("")}>Duration</button>
      <button onClick={() => setButtons("")}>Status</button> 
    </div> */}
      <h1>{buttons}</h1>
    </>
  );
}

export default Nav;
