import { useState } from "react";
import Todo from "./components/Todo";

import { todos } from "./data/todo";

function App() {
  // setting up the task for the form
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  // to add tasks
  const addTask = () => {};

  //  to delete tasks
  const deleteTask = () => {};

  // clear all items
  const clear = () => {};

  const getTask = () => {
    localStorage.getItem();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("tasks");
    alert("Created success");
  };

  return (
    <>
      <nav className="nav">
        <h1 className="nav--logo">Todo App</h1>
      </nav>

      <main className="main">
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="form--input form--input-task"
            name="task"
            type="text"
            placeholder="Enter your task"
            value={task}
            required
            onChange={(event) => setTask(event.target.value)}
          />
          <input
            className="form--input form--input-description"
            name="description"
            placeholder="Enter the task description(option)"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit" className="form--button">
            Add
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
