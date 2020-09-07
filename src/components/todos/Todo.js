import React from "react";
import { Typography } from "@material-ui/core";

export default function Todo({ todos }) {
  return (
    <div className="todo">
      {todos &&
        todos.map((todo, index) => (
          <div>
            <h2 className="title">title :{todo.title}</h2>
            <p className="content">content: {todo.content}</p>
          </div>
        ))}
    </div>
  );
}
