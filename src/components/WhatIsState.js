import React, { useState } from "react";

const myNewData = "my data";

export default function WhatIsState() {
  const [myData, setMyData] = useState("my data");
  const handleData = () => {
    setMyData("your data");
  };

  const handleOnChange = (event) => {
    setMyData(event.target.value);
  };

  return (
    <div>
      <p>{myData}</p>
      <button onClick={handleData}>Update my data</button>
      <input onChange={handleOnChange} defaultValue={myData}></input>
    </div>
  );
}
