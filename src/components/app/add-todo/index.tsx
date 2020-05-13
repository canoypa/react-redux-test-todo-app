import React from "react";
import Redux from "redux";
import ReactRedux from "react-redux";
import { addTodo } from "../../../actions";

type Props = {
  addTodo: (text: string) => void;
};

const AddTodo: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = React.useState<string>("");

  const handler = {
    addTodo: (event: React.FormEvent) => {
      addTodo(text);
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

const stateToProps = (state: any) => ({});
const dispatchToProps = (dispatch: Redux.Dispatch) => ({
  addTodo: (text: string) => dispatch(addTodo(text)),
});

export default ReactRedux.connect(stateToProps, dispatchToProps)(AddTodo);
