import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  // array of tasks

  const [tasks, setTasks] = useState(() => {
    const taskList = JSON.parse(localStorage.getItem("tasks"));
    return taskList ? taskList : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify([...tasks]));
  }, [tasks]);

  // to add tasks
  const addTask = (title) => {
    setTasks([...tasks, { title }]);
  };

  //  to delete tasks
  const deleteTask = (title) => {
    setTasks(tasks.filter((task) => task.title !== title));
  };

  // clear all items
  const clear = () => {};

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
        <AddTodo onAdd={addTask} />
        {tasks.map((todo, index) => {
          const { title, description } = todo;
          return (
            <Todo
              key={index}
              title={title}
              description={description}
              onDelete={deleteTask}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
