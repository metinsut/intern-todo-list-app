import React, { useState } from "react";

export default function TodoInput(props) {
  const { setTodoList } = props;

  const [inputVal, setInputVal] = useState("");

  const addItemToList = () => {
    setTodoList((prevState) => [
      ...prevState,
      { name: inputVal, id: Math.random(), done: false },
    ]);
  };

  // const arr1 = [1, 2, 3];
  // const arr2 = [4, 5, 6];
  // const item = 7;
  // const myArray = [...arr1, ...arr2, item];

  const handleChange = (event) => {
    setInputVal(event.target.value);
  };

  return (
    <div className="bg-amber-600 p-4 flex justify-center gap-4">
      <input
        onChange={handleChange}
        className="rounded-lg border-2 border-solid border-gray-500 p-2"
      ></input>
      <button
        onClick={addItemToList}
        className="rounded-lg bg-lime-400 p-2 text-white"
      >
        Add Item
      </button>
    </div>
  );
}
