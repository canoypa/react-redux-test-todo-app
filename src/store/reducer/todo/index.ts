import Redux from "redux";
import {
  AddTodoType,
  ToggleCompletedType,
  DeleteTodoType,
} from "../../../actions/todo";
import { TodoAction } from "../../../actions/todo/types";
import { TodoStateType } from "./types";

const todoReducer: Redux.Reducer<TodoStateType, TodoAction> = (
  state = new Map(),
  action
) => {
  switch (action.type) {
    case AddTodoType:
      return new Map(state.set(action.data.id, action.data));

    case ToggleCompletedType:
      const todo = state.get(action.data.id);

      if (todo) {
        return new Map(
          state.set(todo.id, { ...todo, complete: action.data.isCompleted })
        );
      }
      return state;

    case DeleteTodoType:
      state.delete(action.data);
      return new Map(state);

    default:
      const __check: never = action;
  }
};

export default todoReducer;
