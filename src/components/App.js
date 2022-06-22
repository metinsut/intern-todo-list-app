import React, { useState } from "react";
import WhatIsProps from "./WhatIsProps";
import WhatIsState from "./WhatIsState";
import "../index.css";
import TodoHeader from "../TodoApp/TodoHeader";
import TodoInput from "../TodoApp/TodoInput";
import TodoList from "../TodoApp/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    {
      name: "Egg",
      id: Math.random(),
      done: false,
    },
  ]);
  return (
    <div>
      {/* <WhatIsProps title="My title" number={30} />
      <WhatIsState /> */}

      <TodoHeader />
      <TodoInput setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
