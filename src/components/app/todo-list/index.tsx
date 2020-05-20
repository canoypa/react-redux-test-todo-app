import React from "react";
import { useSelector } from "react-redux";
import Todo from "./todo";

const TodoList: React.FC = () => {
  const todoListState = useSelector((store) => store.todo);
  const filter = useSelector((store) => store.filter);

  const todoListArray = [...todoListState.values()];

  const todoList = todoListArray.filter((todo) => {
    if (filter === "COMPLETED" && todo.complete) return true;
    if (filter === "ACTIVE" && !todo.complete) return true;
    if (filter === "ALL") return true;
  });

  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
