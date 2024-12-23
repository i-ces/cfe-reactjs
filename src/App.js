import Todo from "./components/Todo";

const todos = [
  {
    title: "Learn React",
    description: "React is a JavaScript library for building user interfaces",
  },
  {
    title: "Learn JavaScript",
    description: "JavaScript is a versatile programming language",
  },
  {
    title: "Learn HTML",
    description: "HTML is the standard markup language for creating web pages",
  },
  {
    title: "Learn CSS",
    description:
      "CSS is a stylesheet language used to describe the presentation of a document",
  },
  {
    title: "Learn Node.js",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine",
  },
  {
    title: "Learn Express.js",
    description: "Express.js is a web application framework for Node.js",
  },
  {
    title: "Learn MongoDB",
    description: "MongoDB is a document-oriented NoSQL database",
  },
  {
    title: "Learn GraphQL",
    description: "GraphQL is a query language for your API",
  },
  {
    title: "Learn TypeScript",
    description: "TypeScript is a typed superset of JavaScript",
  },
  {
    title: "Learn Redux",
    description: "Redux is a predictable state container for JavaScript apps",
  },
  {
    title: "Learn Next.js",
    description: "Next.js is a React framework for production",
  },
];

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
