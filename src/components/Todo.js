import React from "react";

function Todo({ title, description }) {
  return (
    <div
      style={{
        border: "1px solid grey",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
        width: "300px",
      }}
    >
      <h2
        style={{
          color: "navy",
          borderBottom: "1px solid black",
          padding: "5px",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          color: "gray",
          padding: "5px",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default Todo;
