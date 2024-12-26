import { useState } from "react";
import Todo from "./components/Todo";

import { todos } from "./data/todo";

function App() {
  // setting up the task for the form
  const [task, setTask] = useState(""); // this is the syntax
  // to add tasks
  const addTask = () => {};

  //  to delete tasks
  const deleteTask = () => {};

  // clear all items
  const clear = () => {};

  return (
    <>
      <nav className="nav">
        <h1 className="nav--logo">Todo App</h1>
      </nav>

      <main className="main">
        <form className="form">
          <input
            className="form--input"
            name="task"
            type="text"
            placeholder="Enter your task"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />
          <button type="submit" className="form--button">
            +
          </button>
        </form>
        {todos.map((todo, index) => {
          const { title, description } = todo;
          return <Todo key={index} title={title} description={description} />;
        })}
      </main>
    </>
  );
}

export default App;

// task = ""

// task = "a"
// task = "ab"
