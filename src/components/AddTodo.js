import React, { useState } from "react";
import "./AddTodo.css";

function AddTodo({ onAdd }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(task);
  };
  return (
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

      <button type="submit" className="form--button">
        Add
      </button>
    </form>
  );
}

export default AddTodo;
