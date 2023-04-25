import React from "react";
import { TodoModel } from "../models/todoModel";

type TodosContext = {
  items: TodoModel[];
  addTodo: () => void;
  removeTodo: (id: string) => void;
};

const TodosContext = React.createContext<TodosContext>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = React.useState<TodoModel[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new TodoModel(text);

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodoHandler = (todoId: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContext = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
