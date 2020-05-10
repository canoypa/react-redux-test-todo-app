import React from "react";
import { TodoType } from "../types";

type Props = {
  addTodo: (todo: TodoType) => void;
};

const AddTodo: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = React.useState<string>("");

  const handler = {
    addTodo: (event: React.FormEvent) => {
      addTodo({ id: Math.random(), text, complete: false });
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
