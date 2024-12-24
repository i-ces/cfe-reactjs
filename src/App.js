import Todo from "./components/Todo";

import { todos } from "./data/todo";

function App() {
  return (
    <>
      <nav className="nav">
        <h1 className="nav--logo">Todo App</h1>
      </nav>

      <main className="main">
        {todos.map((todo, index) => {
          const { title, description } = todo;
          return <Todo key={index} title={title} description={description} />;
        })}
      </main>
    </>
  );
}

export default App;
