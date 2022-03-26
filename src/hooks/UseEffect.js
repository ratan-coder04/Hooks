import React, { useState, useEffect } from "react";
import "./style.css";
const UseEffect = () => {
  // const intialData = 15;
  const [myNum, setMyNum] = useState(0);
  useEffect(() => {
    document.title = `chat(${myNum})`;
  });

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Message
        </div>
      </div>
    </>
  );
};

export default UseEffect;
