import React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../actions/todo";
import { addTodoAction } from "../../../actions/todo/types";

const AddTodo: React.FC = () => {
  const dispatch = useDispatch<Dispatch<addTodoAction>>();
  const [text, setText] = React.useState<string>("");

  const handler = {
    addTodo: (event: React.FormEvent) => {
      dispatch(addTodo(text));
      event.preventDefault();
    },
    setText: (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    },
  };

  return (
    <div>
      <form onSubmit={handler.addTodo}>
        <input type="text" value={text} onChange={handler.setText} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
