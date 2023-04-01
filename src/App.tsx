import React from "react";
import "./App.css";
import Todo from "./components/todo";
import { TodoModel } from "./models/todoModel";

function App() {
  const todos = [
    new TodoModel("Learn React"),
    new TodoModel("Learn TypeScript"),
    new TodoModel("Learn GraphQL"),
  ];

  return (
    <div className="App">
      <Todo todos={todos} />
    </div>
  );
}

export default App;
