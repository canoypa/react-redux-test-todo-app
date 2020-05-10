import React from "react";
import { TodoListType, filterType } from "../types";
import Todo from "./todo";

type Props = {
  todoList: TodoListType;
  filter: filterType;
  toggleCompleted: (id: number, isCompleted: boolean) => void;
  deleteTodo: (id: number) => void;
};

const TodoList: React.FC<Props> = ({
  todoList,
  filter,
  toggleCompleted,
  deleteTodo,
}) => {
  const todoListArr = [...todoList.values()];

  const filteredTodoList = todoListArr.filter((todo) => {
    if (filter === "COMPLETED" && todo.complete) return true;
    if (filter === "ACTIVE" && !todo.complete) return true;
    if (filter === "ALL") return true;
  });

  return (
    <ul>
      {filteredTodoList.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
