import React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { toggleCompleted, deleteTodo } from "../../../../actions/todo";
import { TodoType } from "../../../../store/types";
import {
  ToggleCompletedAction,
  DeleteTodoAction,
} from "../../../../actions/todo/types";

type Props = {
  todo: TodoType;
};

const Todo: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch<ToggleCompletedAction | DeleteTodoAction>();

  const handler = {
    toggleCompleted: () => dispatch(toggleCompleted(todo.id, !todo.complete)),
    deleteTodo: () => dispatch(deleteTodo(todo.id)),
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
