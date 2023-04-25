import React from "react";
import "./App.css";
import Todo from "./components/todo";
import { TodoModel } from "./models/todoModel";
import NewTodo from "./components/NewTodo";

function App() {
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todo todos={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
