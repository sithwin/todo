import React from "react";
import "./App.css";
import Todo from "./components/todo";
import { TodoModel } from "./models/todoModel";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = React.useState<TodoModel[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new TodoModel(text);

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todo todos={todos} />
    </div>
  );
}

export default App;
