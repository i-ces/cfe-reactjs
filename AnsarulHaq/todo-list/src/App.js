import Todo from "./components/Todo";

function App() {
  return (
      <>
          <nav style={
              {
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "green",
                  color: "white",
                  padding: "1rem"
              }
          }>
              <h1>Todo List</h1>
          </nav>
          <main>
              <Todo title="Task 1" description="This is my fist task"/>
          </main>
      </>
  );
}

export default App;