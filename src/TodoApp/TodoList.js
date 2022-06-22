import React from "react";

export default function TodoList({ todoList, setTodoList }) {
  const handleRemove = (id) => {
    setTodoList((prevState) => {
      const newState = prevState.filter((item) => item.id !== id);
      return newState;
    });
  };

  // const isTrue = false;
  // const deneme = isTrue ? "güzel" : "kötü";

  // const test = () => {
  //   if (isTrue) {
  //     return "güzel";
  //   } else {
  //     return "kötü";
  //   }
  // };

  const handleOnChange = (id) => {
    setTodoList((prevState) => {
      const newState = prevState.map((item) => {
        return item.id === id ? { ...item, done: !item.done } : { ...item };
      });
      return newState;
    });
  };

  return (
    <div className="bg-purple-500 p-4 grid gap-2">
      {todoList.map((item) => (
        <div key={item.id} className="flex justify-center items-center gap-2">
          <input
            type="checkbox"
            defaultChecked={item.done}
            onChange={() => handleOnChange(item.id)}
          ></input>
          <p
            className={
              item.done
                ? "text-gray-500 line-through"
                : "text-white no-underline"
            }
          >
            {item.name}
          </p>
          <button
            className="bg-red-700 p-1 rounded-md"
            onClick={() => handleRemove(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
