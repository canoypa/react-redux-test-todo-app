import React from "react";
import { TodoType } from "../../types";

type Props = {
  todo: TodoType;
  updateTodo: React.Dispatch<TodoType>;
};

const Todo: React.FC<Props> = ({ todo, updateTodo }) => {
  const handler = {
    toggleCompleted: () => {
      updateTodo({ ...todo, complete: !todo.complete });
    },
  };

  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={handler.toggleCompleted}>
        {todo.complete ? "Incomplete" : "Complete"}
      </button>
    </li>
  );
};

export default Todo;
