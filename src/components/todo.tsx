import React from "react";
import { TodoModel } from "../models/todoModel";
import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";

const Todo: React.FC<{ todos: TodoModel[] }> = (props) => {
  return (
    <div>
      <h1>Todo List</h1>
      <ul className={classes.todos}>
        {props.todos.map((todo) => (
          <TodoItem key={todo.id} text={todo.title} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
