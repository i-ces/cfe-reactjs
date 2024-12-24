import Todo from "./components/Todo";

import { todos } from "./data/todo";

function App() {
  return (
    <>
      <nav
        style={{
          padding: "0 20px",
          position: "sticky",
          top: "0",
          backgroundColor: "pink",
          height: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1>Todo App</h1>
      </nav>

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {todos.map((todo, index) => {
          //   const title = todo.title;
          //   const description = todo.description;
          const { title, description } = todo;
          return <Todo key={index} title={title} description={description} />;
        })}
      </main>
    </>
  );
}

export default App;
