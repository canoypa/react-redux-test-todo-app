import React from "react";
import { TodoType } from "../../types";

type Props = {
  todo: TodoType;
  updateTodo: React.Dispatch<TodoType>;
  deleteTodo: React.Dispatch<number>;
};

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  const handler = {
    toggleCompleted: () => {
      updateTodo({ ...todo, complete: !todo.complete });
    },
    deleteTodo: () => {
      deleteTodo(todo.id);
    },
  };

  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={handler.toggleCompleted}>
        {todo.complete ? "Incomplete" : "Complete"}
      </button>
      <button onClick={handler.deleteTodo}>Delete</button>
    </li>
  );
};

export default Todo;
