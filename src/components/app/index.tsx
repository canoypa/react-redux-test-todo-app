import React from "react";
import ReactRedux from "react-redux";
import store from "../../store";
import AddTodo from "./add-todo";
import TodoList from "./todo-list";
import { TodoListType, TodoType, FilterType } from "./types";
import ToggleFilter from "./toggle-filter";

const App: React.FC = () => {
  const [todoList, setTodo] = React.useState<TodoListType>(new Map());
  const [filter, setFilter] = React.useState<FilterType>("ALL");

  const handler = {
    addTodo: (todo: TodoType) => setTodo(new Map(todoList.set(todo.id, todo))),
    deleteTodo: (id: number) => {
      todoList.delete(id);
      setTodo(new Map(todoList));
    },
    toggleCompleted: (id: number, isCompleted: boolean) => {
      const todo = todoList.get(id);

      if (todo) {
        setTodo(
          new Map(todoList.set(todo.id, { ...todo, complete: isCompleted }))
        );
      }
    },
  };

  return (
    <ReactRedux.Provider store={store}>
      <AddTodo addTodo={handler.addTodo} />
      <ToggleFilter setFilter={setFilter} activeFilter={filter} />
      <TodoList
        filter={filter}
        todoList={todoList}
        toggleCompleted={handler.toggleCompleted}
        deleteTodo={handler.deleteTodo}
      />
    </ReactRedux.Provider>
  );
};

export default App;
