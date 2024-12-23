import Todo from "./components/Todo";

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
        <Todo
          description={
            "React is a JavaScript library for building user interfaces"
          }
          title={"Learn React"}
        />
        <Todo
          description={
            "React is a JavaScript library for building user interfaces"
          }
          title={"Learn React"}
        />
        <Todo
          description={
            "React is a JavaScript library for building user interfaces"
          }
          title={"Learn React"}
        />
        <Todo
          description={
            "React is a JavaScript library for building user interfaces"
          }
          title={"Learn React"}
        />
        <Todo
          description={
            "React is a JavaScript library for building user interfaces"
          }
          title={"Learn React"}
        />
        <Todo
          description={
            "React is a JavaScript library for building user interfaces"
          }
          title={"Learn React"}
        />
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
