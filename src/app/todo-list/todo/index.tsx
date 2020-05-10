import React from "react";
import { TodoType } from "../../types";

type Props = {
  todo: TodoType;
  toggleCompleted: (id: number, isCompleted: boolean) => void;
  deleteTodo: React.Dispatch<number>;
};

const Todo: React.FC<Props> = ({ todo, toggleCompleted, deleteTodo }) => {
  const handler = {
    toggleCompleted: () => {
      toggleCompleted(todo.id, !todo.complete);
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
