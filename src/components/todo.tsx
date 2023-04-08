import React from "react";
import { TodoModel } from "../models/todoModel";
import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";

const Todo: React.FC<{
  todos: TodoModel[];
  onRemoveTodo: (id: number) => void;
}> = (props) => {
  return (
    <div>
      <h1>Todo List</h1>
      <ul className={classes.todos}>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.title}
            onRemoveTodo={props.onRemoveTodo.bind(null, todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
