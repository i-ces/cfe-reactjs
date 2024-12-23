import Todo from "./components/Todo";

function App() {
  return (
    <>
      <nav
        style={{
          backgroundColor: "pink",
          height: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1>Todo App</h1>
      </nav>

      <main>
        <Todo />
      </main>
    </>
  );
}

export default App;
