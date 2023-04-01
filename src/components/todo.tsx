import React from "react";
import { TodoModel } from "../models/todoModel";

const Todo: React.FC<{ todos: TodoModel[] }> = (props) => {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
