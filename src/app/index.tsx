import React from "react";
import AddTodo from "./add-todo";
import TodoList from "./todo-list";
import { TodoListType, TodoType, filterType } from "./types";
import ToggleFilter from "./toggle-filter";

const App: React.FC = () => {
  const [todoList, setTodo] = React.useState<TodoListType>(new Map());
  const [filter, setFilter] = React.useState<filterType>("ALL");

  const handler = {
    addTodo: (todo: TodoType) => setTodo(new Map(todoList.set(todo.id, todo))),
    updateTodo: (todo: TodoType) =>
      setTodo(new Map(todoList.set(todo.id, todo))),
  };

  return (
    <React.Fragment>
      <AddTodo addTodo={handler.addTodo} />
      <ToggleFilter setFilter={setFilter} activeFilter={filter} />
      <TodoList
        filter={filter}
        todoList={todoList}
        updateTodo={handler.updateTodo}
      ></TodoList>
    </React.Fragment>
  );
};

export default App;
