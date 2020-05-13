import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { toggleCompleted, deleteTodo } from "../../../../actions";
import { TodoType } from "../../../../store/types";

type Props = {
  todo: TodoType;
  toggleCompleted: (id: number, isCompleted: boolean) => void;
  deleteTodo: (id: number) => void;
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

const dispatchToProps = (dispatch: Dispatch) => ({
  toggleCompleted: (id: number, isCompleted: boolean) =>
    dispatch(toggleCompleted(id, isCompleted)),
  deleteTodo: (id: number) => dispatch(deleteTodo(id)),
});

export default connect(null, dispatchToProps)(Todo);
