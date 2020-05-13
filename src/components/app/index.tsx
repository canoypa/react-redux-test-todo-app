import React from "react";
import { Provider } from "react-redux";
import store from "../../store";
import AddTodo from "./add-todo";
import TodoList from "./todo-list";
import ToggleFilter from "./toggle-filter";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AddTodo />
      <ToggleFilter />
      <TodoList />
    </Provider>
  );
};

export default App;
