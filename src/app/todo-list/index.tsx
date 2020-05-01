import React from "react";
import { TodoListType, filterType, TodoType } from "../types";
import Todo from "./todo";

type Props = {
  todoList: TodoListType;
  filter: filterType;
  updateTodo: React.Dispatch<TodoType>;
  deleteTodo: React.Dispatch<number>;
};

const TodoList: React.FC<Props> = ({
  todoList,
  filter,
  updateTodo,
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
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
