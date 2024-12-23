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
        <Todo
          description={
            "React is a JavaScript library for building user interfaces"
          }
          title={"Learn React"}
        />
      </main>
    </>
  );
}

export default App;
