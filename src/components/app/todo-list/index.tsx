import React from "react";
import { connect } from "react-redux";
import Todo from "./todo";
import { StoreType } from "../../../store/types";
import { TodoType } from "../../../store/reducer/todo/types";

type Props = {
  todoList: Array<TodoType>;
};

const TodoList: React.FC<Props> = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

const stateToProps = (state: StoreType) => {
  const todoListArray = [...state.todo.values()];
  const filter = state.filter;

  const todoList = todoListArray.filter((todo) => {
    if (filter === "COMPLETED" && todo.complete) return true;
    if (filter === "ACTIVE" && !todo.complete) return true;
    if (filter === "ALL") return true;
  });

  return {
    todoList,
  };
};

export default connect(stateToProps)(TodoList);
